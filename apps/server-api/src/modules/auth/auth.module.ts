import { Module } from '@nestjs/common';
import { JwtModule } from '../jwt/jwt.module';
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
    TypeOrmModule.forFeature([User, AdminUser]),
    PassportModule,
    JwtModule
  ],
  controllers: [AdminAuthController, AppAuthController],
  providers: [AuthService, JwtStrategy],
  exports: [AuthService],
})
export class AuthModule {}
