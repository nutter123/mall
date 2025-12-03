import { Entity, Column, Index } from 'typeorm';
import { BaseEntity } from '../../../common/entities/base.entity';

@Entity('order_goods')
@Index('idx_goods_id', ['goodsId'])
@Index('idx_order_id', ['orderId'])
export class OrderGoods extends BaseEntity {
  @Column({ name: 'order_id' })
  orderId: number;

  @Column({ name: 'goods_id' })
  goodsId: number;

  @Column({ name: 'spu_id' })
  spuId: number;

  @Column({ name: 'sale_name', length: 255 })
  saleName: string;

  @Column({ name: 'goods_quantity' })
  goodsQuantity: number;

  @Column()
  price: number;

  @Column({ name: 'pay_unit_money' })
  payUnitMoney: number;

  @Column({ name: 'sale_spec_name', length: 255, nullable: true })
  saleSpecName: string;

  @Column({ name: 'spec_num', nullable: true })
  specNum: number;

  @Column({ name: 'img_url', length: 255, nullable: true })
  imgUrl: string;

  @Column({ name: 'img_url_not_gif', length: 255, nullable: true })
  imgUrlNotGif: string;

  @Column({ name: 'first_category_id', nullable: true })
  firstCategoryId: number;

  @Column({ name: 'first_category_name', length: 100, nullable: true })
  firstCategoryName: string;

  @Column({ name: 'only_eat_in', default: false, nullable: true })
  onlyEatIn: boolean;

  @Column({ default: false, nullable: true })
  authentic: boolean;

  @Column({ name: 'speed_delivery', default: false, nullable: true })
  speedDelivery: boolean;

  @Column({ name: 'overtime_payment', default: false, nullable: true })
  overtimePayment: boolean;

  @Column({ name: 'cash_on_delivery', default: false, nullable: true })
  cashOnDelivery: boolean;

  @Column({ default: false, nullable: true })
  frozen: boolean;

  @Column({ name: 'allow_buy', default: true, nullable: true })
  allowBuy: boolean;

  @Column({ name: 'use_coupon', default: false, nullable: true })
  useCoupon: boolean;

  @Column({ name: 'created_at', type: 'datetime', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;

  @Column({ nullable: true })
  status: number;

  @Column({ name: 'in_list', nullable: true })
  inList: number;

  @Column({ name: 'spec_name', length: 255, nullable: true })
  specName: string;

  @Column({ type: 'tinyint', nullable: true })
  gift: number;

  @Column({ name: 'add_money_buy', type: 'tinyint', nullable: true })
  addMoneyBuy: number;
}