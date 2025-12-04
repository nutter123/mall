import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { AdminUser } from './entities/admin-user.entity';
import { AppUserController } from './controllers/app-user.controller';
import { AdminUserController } from './controllers/admin-user.controller';
import { Address } from '../address/entities/address.entity';
import { UserConverter } from './user.converter';
import { JwtModule } from '../jwt/jwt.module';

@Module({
  imports: [TypeOrmModule.forFeature([User, AdminUser, Address]), JwtModule],
  controllers: [
    AdminUserController, // 注册 Admin 控制器
    AppUserController, // 注册 App 控制器
  ],
  providers: [UserService, UserConverter],
  exports: [UserService, UserConverter],
})
export class UserModule {}
