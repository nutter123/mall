import { IsString, IsNumber, IsArray, IsOptional, ValidateNested, Min } from 'class-validator';
import { Type } from 'class-transformer';

export class CreateSkuDto {
  @IsNumber()
  @Min(0)
  price: number;

  @IsNumber()
  @Min(0)
  stock: number;

  @IsOptional()
  attributes: Record<string, string>;
}

export class CreateProductDto {
  @IsString()
  title: string;

  @IsString()
  @IsOptional()
  description?: string;

  @IsString()
  mainImage: string;

  @IsArray()
  @IsString({ each: true })
  @IsOptional()
  images?: string[];

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CreateSkuDto)
  sku: CreateSkuDto;
}
