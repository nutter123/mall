import { Entity, Column, Index } from 'typeorm';
import { BaseEntity } from '../../../common/entities/base.entity';

@Entity('order_goods_split')
@Index('idx_order_goods_id', ['orderGoodsId'])
export class OrderGoodsSplit extends BaseEntity {
  @Column({ name: 'order_goods_id' })
  orderGoodsId: number;

  @Column({ name: 'goods_quantity' })
  goodsQuantity: number;

  @Column({ name: 'price_type', length: 50 })
  priceType: string;

  @Column({ name: 'now_price' })
  nowPrice: number;

  @Column()
  price: number;

  @Column({ default: 0, nullable: true })
  integral: number;

  @Column({ name: 'price_sort', default: 0, nullable: true })
  priceSort: number;
}