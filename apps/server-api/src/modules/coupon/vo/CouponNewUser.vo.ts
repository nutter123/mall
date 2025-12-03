import { ApiProperty } from '@nestjs/swagger';

export class CouponNewUserVO {
  @ApiProperty({ description: '是否可使用时间段' })
  canUseTime: boolean;

  @ApiProperty({ description: '是否领取已过期' })
  couponExpired: boolean;

  @ApiProperty({ description: '优惠券图标' })
  couponIcon: string;

  @ApiProperty({ description: '已领券id' })
  couponId: number;

  @ApiProperty({
    description: '红包类型(coupons-组合红包;add_coupons-加量包;)',
  })
  couponsType: string;

  @ApiProperty({ description: '创建时间' })
  createdDate: string;

  @ApiProperty({ description: '折扣减免' })
  discountMinus: number;

  @ApiProperty({
    description: '折扣类型（dict_type: market_coupon_discount_type）',
  })
  discountType: string;

  @ApiProperty({ description: '启用（1：是，0：否）' })
  enable: boolean;

  @ApiProperty({ description: '领取次数' })
  getNum: number;

  @ApiProperty({ description: '全局id' })
  id: number;

  @ApiProperty({ description: '商品图片' })
  imgUrl: string;

  @ApiProperty({ description: '优惠券说明' })
  instruction: string;

  @ApiProperty({
    description: '发行类型（dict_type: market_coupon_issue_type）',
  })
  issueType: string;

  @ApiProperty({ description: '限制订单金额（1：是，0：否）' })
  limitAmount: boolean;

  @ApiProperty({ description: '限制订单金额至少' })
  limitAmountMin: number;

  @ApiProperty({
    description: '限制商品类型（dict_type: market_limit_goods_type）',
  })
  limitGoodsType: string;

  @ApiProperty({ description: '是否限制站点' })
  limitSite: boolean;

  @ApiProperty({ description: '限制时间领取后有效天数' })
  limitTimeDay: number;

  @ApiProperty({ description: '限制时间领取后有效小时' })
  limitTimeHour: number;

  @ApiProperty({ description: '使用时间' })
  limitTimeRule: string;

  @ApiProperty({
    description:
      '限制时间类型（date：指定时间，hour：领取后N小时，today：领取后N天，tomorrow：领取后次日N天，none：不限时间）',
  })
  limitTimeType: string;

  @ApiProperty({ description: '是否多商品兑换' })
  moreGoods: boolean;

  @ApiProperty({ description: '是否多站点' })
  moreSite: boolean;

  @ApiProperty({ description: '名称' })
  name: string;

  @ApiProperty({ description: '是否新人专享' })
  newUserExclusive: boolean;

  @ApiProperty({ description: '可用站点名称' })
  siteName: string;

  @ApiProperty({ description: '排序' })
  sortTemp: number;

  @ApiProperty({ description: '是否会员专享' })
  svipUserExclusive: boolean;

  @ApiProperty({ description: '是否已使用' })
  used: boolean;

  @ApiProperty({ description: '是否已领取' })
  yetGet: boolean;
}