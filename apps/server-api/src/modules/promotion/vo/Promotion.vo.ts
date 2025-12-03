import { ApiProperty } from '@nestjs/swagger';

export class PromotionVO {
  @ApiProperty({
    description: '活动类型编码（dict_type: market_promotion_code）',
  })
  code: string;
  @ApiProperty({ description: '商品折后价格' })
  discountPrice: number;
  @ApiProperty({ description: '隐藏折扣价（1：是，0：否）' })
  hideDiscount: boolean;
  @ApiProperty({ description: '全局id' })
  id: number;
}
