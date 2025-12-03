import { ApiProperty } from '@nestjs/swagger';

export class BigCouponVO {
  @ApiProperty({ description: '优惠券ID' })
  id: string;

  @ApiProperty({ description: '折扣类型' })
  discountType: string;

  @ApiProperty({ description: '折扣减免金额' })
  discountMinus: number;

  @ApiProperty({ description: '金额' })
  money: number;

  @ApiProperty({ description: '会员价格' })
  svipPrice: number;
}