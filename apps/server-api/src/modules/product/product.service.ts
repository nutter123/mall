import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateProductDto } from '../product/dto/create-product.dto';
import { Product } from './entities/product.entity';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(Product)
    private readonly productRepository: Repository<Product>,
  ) {}

  async create(createProductDto: CreateProductDto) {
    // 1. 创建内存对象（此时还没存数据库）
    // TypeORM 足够智能，能识别 createProductDto 里的 skus 数组，并映射到 Entity 关系中
    const product = this.productRepository.create(createProductDto);

    // 2. 保存到数据库
    // 因为我们在 Entity 里配置了 cascade: true，它会自动建立 Product 和 Sku 的关联并一起保存
    return await this.productRepository.save(product);
  }

  async findAll() {
    // 查商品的时候，顺便把关联的 SKU 也查出来
    return await this.productRepository.find({
      relations: ['skus'],
    });
  }

  async findOne(id: string) {
    return await this.productRepository.findOne({
      where: { id },
      relations: ['skus'], // 重点：一定要把关联的 SKU 也查出来
    });
  }
}
