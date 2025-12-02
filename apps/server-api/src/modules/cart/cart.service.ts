import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CartItem } from './entities/cart-item.entity';
import { AddCartDto } from './dto/create-cart.dto';

@Injectable()
export class CartService {
  constructor(
    @InjectRepository(CartItem)
    private cartRepo: Repository<CartItem>,
  ) {}

  async addToCart(userId: string, dto: AddCartDto) {
    // 1. 查重：该用户是否已加购过该 SKU
    const existingItem = await this.cartRepo.findOne({
      where: { userId, skuId: dto.skuId },
    });

    if (existingItem) {
      // 2. 存在则更新数量
      existingItem.count += dto.count;
      return this.cartRepo.save(existingItem);
    } else {
      // 3. 不存在则创建新记录
      const newItem = this.cartRepo.create({
        userId,
        skuId: dto.skuId,
        count: dto.count,
      });
      return this.cartRepo.save(newItem);
    }
  }

  async findAll(userId: string) {
    // 查询购物车列表，必须关联 SKU 和 Product 信息，因为前端要展示图片和标题
    return this.cartRepo.find({
      where: { userId },
      relations: ['sku', 'sku.product'], // 级联查询：Cart -> Sku -> Product
      order: { createdAt: 'DESC' },
    });
  }
}
