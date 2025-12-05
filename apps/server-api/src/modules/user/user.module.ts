import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { AdminUser } from './entities/admin-user.entity';
import { AdminUserController } from './controllers/admin-user.controller';
import { UserConverter } from './user.converter';
import { JwtModule } from '../jwt/jwt.module';
import { UserCoupon } from './entities/user-coupon.entity';
import { UserOrder } from './entities/user-order.entity';
import { UserProductInteraction } from './entities/user-product-interaction.entity';

@Module({
  imports: [TypeOrmModule.forFeature([AdminUser]), JwtModule],
  controllers: [
    AdminUserController, // 注册 Admin 控制器
  ],
  providers: [UserService, UserConverter],
  exports: [UserService, UserConverter],
})
export class UserModule {}
