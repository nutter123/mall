import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm'; // 引入 TypeOrmModule
import { ProductService } from './product.service';
import { ProductController } from './product.controller';
import { Product } from './entities/product.entity'; // 引入实体
import { Sku } from './entities/sku.entity'; // 引入实体
import { ProductSku } from './entities/product-sku.entity';
import { ProductSpu } from './entities/product-spu.entity';
import { ProductSpecKey } from './entities/product-spec-key.entity';
import { ProductSpecValue } from './entities/product-spec-value.entity';
import { ProductOtherService } from './entities/product-other-service.entity';
import { ProductImage } from './entities/product-image.entity';
import { ProductAttribute } from './entities/product-attribute.entity';
import { Category } from './entities/category.entity';
import { CategoryProductRelation } from './entities/category-product-relation.entity';
import { CategoryFilterAttribute } from './entities/category-filter-attribute.entity';
import { CategoryAttributeLink } from './entities/category-attribute-link.entity';
import { Good } from './entities/good.entity';
import { CategoryBrandLink } from './entities/category-brand-link.entity';
import { Brand } from './entities/brand.entity';

@Module({
  // 核心步骤：注册实体
  imports: [
    TypeOrmModule.forFeature([
      Product,
      ProductSku,
      ProductSpu,
      ProductSpecKey,
      ProductSpecValue,
      ProductOtherService,
      ProductImage,
      ProductAttribute,
      Good,
      Category,
      CategoryProductRelation,
      CategoryFilterAttribute,
      CategoryBrandLink,
      CategoryAttributeLink,
      Brand,
    ]),
  ],
  controllers: [ProductController],
  providers: [ProductService],
})
export class ProductModule {}
