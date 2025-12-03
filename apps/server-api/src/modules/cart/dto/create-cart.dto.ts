import { IsInt, IsString, Min } from 'class-validator';

export class AddCartDto {
  /**
   * 商品 SKU ID
   * @example 'SKU12345'
   */
  @IsString()
  skuId: string;

  /**
   * 购买数量
   * @example 2
   */
  @IsInt()
  @Min(1)
  count: number;
}
