import { IsInt, IsString, Min } from 'class-validator';

export class AddCartDto {
  @IsString()
  skuId: string;

  @IsInt()
  @Min(1)
  count: number;
}
