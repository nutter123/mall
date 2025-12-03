import { ApiProperty } from '@nestjs/swagger';

export class SuperValueDTO {
  @ApiProperty({ description: '商品数量' })
  goodsQuantity: number;
  @ApiProperty({ description: '商品ID' })
  id: number;
}