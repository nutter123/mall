import { ApiProperty } from '@nestjs/swagger';

export class MultiplePromotionListVO {
  @ApiProperty({ description: '活动编码' })
  code: string;

  @ApiProperty({ description: '详细描述' })
  detailDescription: string;

  @ApiProperty({ description: '活动结束详情' })
  detailEnd: string;

  @ApiProperty({ description: '活动标签详情' })
  detailLabel: string;

  @ApiProperty({ description: '活动开始详情' })
  detailStart: string;

  @ApiProperty({ description: '活动ID' })
  id: string;

  @ApiProperty({ description: '标签' })
  label: string;

  @ApiProperty({ description: '活动名称' })
  name: string;

  @ApiProperty({ description: '促销赠品列表' })
  promotionGiftList: object;

  @ApiProperty({ description: '促销商品限制' })
  promotionGoodsLimit: object;

  @ApiProperty({ description: '促销商品列表' })
  promotionGoodsList: object;

  @ApiProperty({ description: '状态' })
  status: string;
}