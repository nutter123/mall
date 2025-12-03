import { ApiProperty } from '@nestjs/swagger';

export class CalcGoodsDTO {
  @ApiProperty({ description: '冻结数量' })
  frozenQuantity: number;

  @ApiProperty({ description: '商品ID' })
  goodsId: string;

  @ApiProperty({ description: '商品数量' })
  goodsQuantity: number;

  @ApiProperty({ description: '促销代码' })
  promotionCode: string;

  @ApiProperty({ description: '促销ID' })
  promotionId: number;
}