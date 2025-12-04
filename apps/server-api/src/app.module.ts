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
import { ThrottlerGuard, ThrottlerModule } from '@nestjs/throttler';
import { Address } from './modules/address/entities/address.entity';
import { AddressModule } from './modules/address/address.module';
import { AdvertisingModule } from './modules/advertising/advertising.module';
import { Article } from './modules/article/entities/article.entity';
import { ArticleModule } from './modules/article/article.module';
import { CalcModule } from './modules/calc/calc.module';
import { ComboModule } from './modules/combo/combo.module';
import { CouponModule } from './modules/coupon/coupon.module';
import { EstimateModule } from './modules/estimate/estimate.module';
import { GoodsModule } from './modules/goods/goods.module';
import { HomeModule } from './modules/home/home.module';
import { InfoModule } from './modules/info/info.module';
import { JwtModule } from './modules/jwt/jwt.module';
import { MerchantBModule } from './modules/merchant-b/merchant-b.module';
import { NavigationModule } from './modules/navigation/navigation.module';
import { PromotionModule } from './modules/promotion/promotion.module';
import { RecommendModule } from './modules/recommend/recommend.module';
import { SiteModule } from './modules/site/site.module';
import { TokenModule } from './modules/token/token.module';
import { VipModule } from './modules/vip/vip.module';
import { WechatModule } from './modules/wechat/wechat.module';
import { CommonModule } from './modules/common/common.module';

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

    ThrottlerModule.forRoot({
      throttlers: [
        {
          ttl: 60000, // 60秒
          limit: 10, // 这里的策略是：同一IP，60秒内只能请求10次
        },
      ],
    }),
    AddressModule,
    AdvertisingModule,
    ArticleModule,
    AuthModule,
    CalcModule,
    CartModule,
    ComboModule,
    CommonModule,
    CouponModule,
    EstimateModule,
    GoodsModule,
    HomeModule,
    InfoModule,
    // InventoryModule,
    JwtModule,
    MerchantBModule,
    NavigationModule,
    // OrderModule,
    ProductModule,
    PromotionModule,
    RecommendModule,
    SiteModule,
    TokenModule,
    UploadModule,
    UserModule,
    VipModule,
    WechatModule,
    // WecomModule,
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
    {
      provide: APP_GUARD,
      useClass: ThrottlerGuard,
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
