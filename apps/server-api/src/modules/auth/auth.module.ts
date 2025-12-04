import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '../user/entities/user.entity';
import { AuthService } from './auth.service';
import { JwtStrategy } from './jwt.strategy';
import { AdminUser } from '../user/entities/admin-user.entity';
import { AdminAuthController } from './controllers/admin-auth.controller';
import { AppAuthController } from './controllers/app-auth.controller';

@Module({
  imports: [
    TypeOrmModule.forFeature([User]), // 引入 User 表操作权限
    TypeOrmModule.forFeature([AdminUser]), // 引入 User 表操作权限
    PassportModule,
    JwtModule.registerAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => ({
        secret: configService.getOrThrow('JWT_SECRET'),
        signOptions: { expiresIn: '7d' }, // Token 7天过期
      }),
    }),
  ],
  controllers: [
    AdminAuthController,
    AppAuthController,
  ],
  providers: [AuthService, JwtStrategy],
  exports: [AuthService],
})
export class AuthModule {}
