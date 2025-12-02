import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductModule } from './modules/product/product.module';
import { UploadModule } from './modules/upload/upload.module';
import { UserModule } from './modules/user/user.module';
import { AuthModule } from './modules/auth/auth.module';
import { APP_GUARD } from '@nestjs/core';
import { JwtAuthGuard } from './common/guards/jwt-auth.guard';
import { CartModule } from './modules/cart/cart.module';
import { ClsModule } from 'nestjs-cls';
import { v4 as uuid4 } from 'uuid';
import { WinstonModule } from 'nest-winston';
import * as winston from 'winston';
import { CacheModule } from '@nestjs/cache-manager';
import * as redisStore from 'cache-manager-redis-store';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { LoggingInterceptor } from './common/interceptors/logging.interceptor';
import { HttpCacheInterceptor } from './common/interceptors/cache.interceptor';

@Module({
  imports: [
    // 1. 配置 CLS (链路追踪上下文)
    ClsModule.forRoot({
      global: true,
      middleware: {
        mount: true, // 自动挂载中间件
        generateId: true, // 自动生成 ID
        idGenerator: (req) => req.headers['x-trace-id'] || uuid4(), // 如果前端传了用前端的，没传自己生成
      },
    }),
    // 2. 配置 Winston (结构化日志)
    WinstonModule.forRoot({
      transports: [
        new winston.transports.Console({
          format: winston.format.combine(
            winston.format.timestamp(),
            winston.format.ms(),
            winston.format.json(), // ⚠️ 大厂标准：生产环境必须是 JSON 格式，方便 ELK 采集
          ),
        }),
        // 实际生产中通常还会加一个 DailyRotateFile 存文件，这里仅演示 Console
      ],
    }),
    CacheModule.register({
      isGlobal: true, // 全局可用
      store: redisStore,
      host: process.env.DB_HOST || 'localhost', // 使用 docker-compose 里的 Redis
      port: 6379,
      ttl: 60, // 默认 60秒
    }),
    // 1. 加载配置模块 (读取 .env)
    ConfigModule.forRoot({
      isGlobal: true, // 让配置在全项目通用
    }),

    // 2. 异步连接数据库 (使用 ConfigService 读取配置)
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        type: 'mysql',
        host: configService.get<string>('DB_HOST'),
        port: configService.get<number>('DB_PORT'),
        username: configService.get<string>('DB_USERNAME'),
        password: configService.get<string>('DB_PASSWORD'),
        database: configService.get<string>('DB_DATABASE'),
        // 自动加载实体 (Entity)
        autoLoadEntities: true,
        // 【注意】生产环境要关掉！它会自动根据 Entity 修改数据库表结构，非常方便但危险
        synchronize: false,
      }),
    }),

    ProductModule,

    UploadModule,

    UserModule,

    AuthModule,

    CartModule,
  ],
  controllers: [AppController],
  providers: [
    {
      provide: APP_INTERCEPTOR,
      useClass: LoggingInterceptor,
    },
    {
      provide: APP_GUARD,
      useClass: JwtAuthGuard,
    },
    // 2. 缓存拦截器
    {
      provide: APP_INTERCEPTOR,
      useClass: HttpCacheInterceptor,
    },
    AppService,
  ],
})
export class AppModule {}
