import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { AdminUser } from './entities/admin-user.entity';
import { AppUserController } from './controllers/app-user.controller';
import { AdminUserController } from './controllers/admin-user.controller';
import { Address } from '../address/entities/address.entity';

@Module({
  imports: [TypeOrmModule.forFeature([User, AdminUser, Address])],
  controllers: [
    AdminUserController, // 注册 Admin 控制器
    AppUserController, // 注册 App 控制器
  ],
  providers: [UserService],
  exports: [UserService],
})
export class UserModule {}
