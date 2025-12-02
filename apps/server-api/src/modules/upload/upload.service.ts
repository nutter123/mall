import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import * as Minio from 'minio';
import * as crypto from 'crypto';
import * as path from 'path';

@Injectable()
export class UploadService {
  private minioClient: Minio.Client;
  private bucketName: string;

  constructor(private readonly configService: ConfigService) {
    // 1. 初始化 MinIO 客户端
    this.minioClient = new Minio.Client({
      endPoint: this.configService.getOrThrow('MINIO_ENDPOINT'),
      port: parseInt(this.configService.getOrThrow('MINIO_PORT')),
      useSSL: false, // 本地开发通常不用 SSL
      accessKey: this.configService.getOrThrow('MINIO_ACCESS_KEY'),
      secretKey: this.configService.getOrThrow('MINIO_SECRET_KEY'),
    });
    this.bucketName = this.configService.getOrThrow('MINIO_BUCKET');
  }

  async onModuleInit() {
    await this.initBucket();
  }

  private async initBucket() {
    const bucketName = this.bucketName;

    // 1. 判断桶是否存在，不存在则创建
    const exists = await this.minioClient.bucketExists(bucketName);
    if (!exists) {
      await this.minioClient.makeBucket(bucketName);
      console.log(`[MinIO] Bucket '${bucketName}' created successfully.`);
    }

    // 2. 关键步骤：设置桶的策略为“公开只读”
    // 这是标准的 AWS S3 Policy JSON 格式
    const policy = {
      Version: '2012-10-17',
      Statement: [
        {
          Effect: 'Allow',
          Principal: { AWS: ['*'] }, // 允许任何人
          Action: ['s3:GetObject'], // 只能执行“读取文件”操作
          Resource: [`arn:aws:s3:::${bucketName}/*`], // 针对该桶下的所有文件
        },
      ],
    };

    try {
      await this.minioClient.setBucketPolicy(bucketName, JSON.stringify(policy));
      console.log(`[MinIO] Bucket '${bucketName}' policy set to public read-only.`);
    } catch (err) {
      console.error('[MinIO] Failed to set bucket policy:', err);
    }
  }

  async uploadFile(file: Express.Multer.File) {
    // 2. 生成唯一文件名 (UUID + 原始后缀)
    // 例如: 550e8400-e29b-....png
    const tempFilename = crypto.randomUUID();
    const fileExt = path.extname(file.originalname);
    const filename = `${tempFilename}${fileExt}`;

    try {
      // 3. 上传文件流到 MinIO
      await this.minioClient.putObject(this.bucketName, filename, file.buffer, file.size, {
        'Content-Type': file.mimetype, // 这一点很重要，否则浏览器打开图片会变成下载
      });

      // 4. 拼接公开访问 URL
      // 本地环境 URL 格式: http://localhost:9000/mall/xxx.jpg
      const url = `http://${this.configService.get('MINIO_ENDPOINT')}:${this.configService.get('MINIO_PORT')}/${this.bucketName}/${filename}`;

      return {
        url,
        filename,
      };
    } catch (error) {
      console.error('MinIO Upload Error:', error);
      throw new InternalServerErrorException('文件上传失败');
    }
  }
}
