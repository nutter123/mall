import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm'; // 引入 TypeOrmModule
import { ProductService } from './product.service';
import { ProductController } from './product.controller';
import { Product } from './entities/product.entity'; // 引入实体
import { Sku } from './entities/sku.entity'; // 引入实体

@Module({
  // 核心步骤：注册实体
  imports: [TypeOrmModule.forFeature([Product, Sku])],
  controllers: [ProductController],
  providers: [ProductService],
})
export class ProductModule {}
