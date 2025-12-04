import { Module } from '@nestjs/common';
import { CouponService } from './coupon.service';
import { CouponController } from './coupon.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CouponTemplate } from './entities/coupon-template.entity';

@Module({
  imports: [TypeOrmModule.forFeature([CouponTemplate])],
  controllers: [CouponController],
  providers: [CouponService],
})
export class CouponModule {}
