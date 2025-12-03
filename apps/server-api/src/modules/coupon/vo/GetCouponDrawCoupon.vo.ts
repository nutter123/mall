import { ApiProperty } from '@nestjs/swagger';

export class GetCouponDrawCouponVO {
  @ApiProperty({ description: '是否券包' })
  couponCombo?: boolean;

  @ApiProperty({ description: '已领取未使用id' })
  couponDetailId?: number;

  @ApiProperty({ description: '折扣减免' })
  discountMinus: number;

  @ApiProperty({ description: '优惠券类型（dict_type: market_coupon_discount_type）' })
  discountType: string;

  @ApiProperty({ description: '是否已领取未使用' })
  gotButNotUse?: boolean;

  @ApiProperty({ description: '优惠券id' })
  id: string;

  @ApiProperty({ description: '限制订单金额（1：是，0：否）' })
  limitAmount: boolean;

  @ApiProperty({ description: '限制订单金额至少' })
  limitAmountMin: number;

}