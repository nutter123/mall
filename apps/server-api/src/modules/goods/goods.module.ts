import { Module } from '@nestjs/common';
import { GoodsService } from './goods.service';
import { GoodsController } from './goods.controller';
import { GoodsConverter } from './goods.converter';
import { EstimateModule } from '../estimate/estimate.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductSku } from '../product/entities/product-sku.entity';
import { ProductAttribute } from '../product/entities/product-attribute.entity';
import { ProductImage } from '../product/entities/product-image.entity';

@Module({
  imports: [EstimateModule, TypeOrmModule.forFeature([ProductSku, ProductImage, ProductAttribute])],
  controllers: [GoodsController],
  providers: [GoodsService, GoodsConverter],
  exports: [GoodsService, GoodsConverter],
})
export class GoodsModule {}
