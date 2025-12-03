import { ApiProperty } from '@nestjs/swagger';

export class EstimateVO {
  @ApiProperty({ description: '价格' })
  price: number;

  @ApiProperty({ description: '单价' })
  onePrice: number;

  @ApiProperty({ description: '规格数量' })
  specNum: number;

  @ApiProperty({ description: '最小单位名称' })
  minUnitName: string;

  @ApiProperty({ description: '会员减免' })
  vipMinus: number;

  @ApiProperty({ description: '折扣促销减免' })
  discountPromotionMinus: number;

  @ApiProperty({ description: '新折扣促销减免' })
  newDiscountPromotionMinus: number;

  @ApiProperty({ description: '满减促销减免' })
  fullPromotionMinus: number;

  @ApiProperty({ description: '可选促销减免' })
  optionalPromotionMinus: number;

  @ApiProperty({ description: '优惠券减免' })
  couponMinus: number;

  @ApiProperty({ description: '优惠券ID' })
  couponId: string;

  @ApiProperty({ description: '优惠券名称' })
  couponName: string;

  @ApiProperty({ description: '预估价格' })
  estimatePrice: number;

  @ApiProperty({ description: '预估类型' })
  estimateType: string;

  @ApiProperty({ description: '会员标签' })
  vipLabel: string;

  @ApiProperty({ description: '是否有优惠券标志' })
  couponFlag: boolean;

  @ApiProperty({ description: '计算优惠券' })
  calcCoupon: number;

  @ApiProperty({ description: '是否显示详情标志' })
  detailFlag: boolean;
}
