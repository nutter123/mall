import { Injectable, Logger } from '@nestjs/common';
import { CreateJwtDto } from './dto/create-jwt.dto';
import { UpdateJwtDto } from './dto/update-jwt.dto';
import { ConfigService } from '@nestjs/config';
import * as jwt from 'jsonwebtoken';

@Injectable()
export class JwtService {
  private readonly logger = new Logger(JwtService.name);

  private readonly SECRET_KEY: string;
  private readonly EXPIRATION_TIME: number;

  constructor(private readonly configService: ConfigService) {
    // 注入 ConfigService，从环境变量中获取密钥和过期时间
    this.SECRET_KEY = this.configService.get<string>(
      'JWT_SECRET_KEY',
      'default_secret_key_change_me_in_env',
    );

    // 关键修改：从配置中读取过期时间，并确保它是数字 (例如 604800 秒 = 7天)
    // 使用 parseInt 确保值是数字，如果配置缺失或无效，默认设置为 1 天（86400秒）
    this.EXPIRATION_TIME = parseInt(
      this.configService.get<string>('JWT_EXPIRATION_TIME', '86400'),
      10,
    );

    // 检查密钥长度 (JJWT 推荐 32 字节，jsonwebtoken 没有强制要求，但长密钥更安全)
    if (this.SECRET_KEY.length < 32) {
      this.logger.warn(
        'JWT_SECRET_KEY is too short. Please use a key of 32 characters or more for production.',
      );
    }
  }

  create(createJwtDto: CreateJwtDto) {
    return 'This action adds a new jwt';
  }

  findAll() {
    return `This action returns all jwt`;
  }

  findOne(id: number) {
    return `This action returns a #${id} jwt`;
  }

  update(id: number, updateJwtDto: UpdateJwtDto) {
    return `This action updates a #${id} jwt`;
  }

  remove(id: number) {
    return `This action removes a #${id} jwt`;
  }

  extractUserIdFromContext(context: any): string | null {
    // ... 实际解析 JWT 逻辑 ...
    return context.req.user?.id; // 假设 JWT Guard/Strategy 已将用户ID挂载在 req.user.id
  }

  async generateToken(userId: string): Promise<string> {
    const payload = {
      userId: userId,
    };

    const options: jwt.SignOptions = {
      expiresIn: this.EXPIRATION_TIME,
      issuer: 'your-app-mall',
    };

    // 使用 jsonwebtoken 签名并设置过期时间
    return jwt.sign(payload, this.SECRET_KEY as jwt.Secret, options);
  }

  parseToken(token: string): jwt.JwtPayload | null {
    try {
      // 验证签名，并检查过期时间
      return jwt.verify(token, this.SECRET_KEY) as jwt.JwtPayload; // 返回解析后的 payload (claims)
    } catch (error: any) {
      // 捕获各种错误，如 TokenExpiredError, JsonWebTokenError (签名无效)
      this.logger.error(`Token 解析失败或无效: ${error.message}`);
      return null;
    }
  }
}
