import { Entity, Column, Index } from 'typeorm';
import { BaseEntity } from '../../../common/entities/base.entity';

@Entity('product_sku')
@Index('idx_spu_id', ['spuId'])
export class ProductSku extends BaseEntity {
  @Column({ name: 'spu_id' })
  spuId: number;

  @Column({ name: 'site_id', nullable: true })
  siteId: number;

  @Column({ name: 'spec_name', length: 255, nullable: true })
  specName: string;

  @Column({ nullable: true })
  price: number;

  @Column({ name: 'vip_price', nullable: true })
  vipPrice: number;

  @Column({ name: 'spec_price', nullable: true })
  specPrice: number;

  @Column({ default: false, nullable: true })
  original: boolean;

  @Column({ name: 'vip_price_sts', default: false, nullable: true })
  vipPriceSts: boolean;

  @Column({ name: 'shop_stock', nullable: true })
  shopStock: number;

  @Column({ name: 'spec_stock', nullable: true })
  specStock: number;

  @Column({ name: 'min_unit_name', length: 255, nullable: true })
  minUnitName: string;

  @Column({ name: 'limit_once_max', nullable: true })
  limitOnceMax: number;

  @Column({ name: 'limit_once_max_on', default: false, nullable: true })
  limitOnceMaxOn: boolean;

  @Column({ name: 'limit_once_min', nullable: true })
  limitOnceMin: number;

  @Column({ name: 'limit_once_min_on', default: false, nullable: true })
  limitOnceMinOn: boolean;

  @Column({ name: 'member_day_limit', nullable: true })
  memberDayLimit: number;

  @Column({ name: 'member_day_times', nullable: true })
  memberDayTimes: number;

  @Column({ name: 'limit_all_quantity', default: 2147483647, nullable: true })
  limitAllQuantity: number;

  @Column({ name: 'limit_day_quantity', default: 2147483647, nullable: true })
  limitDayQuantity: number;

  @Column({ name: 'spec_num', nullable: true })
  specNum: number;

  @Column({ nullable: true })
  authentic: boolean;

  @Column({ name: 'overtime_payment', nullable: true })
  overtimePayment: boolean;

  @Column({ name: 'cash_on_delivery', nullable: true })
  cashOnDelivery: boolean;

  @Column({ name: 'limit_stock_all_quantity', default: 2147483647, nullable: true })
  limitStockAllQuantity: number;

  @Column({ name: 'site_stock', nullable: true })
  siteStock: number;

  @Column({ name: 'default_img_id', nullable: true })
  defaultImgId: number;

  @Column({ nullable: true })
  status: number;

  @Column({ name: 'allow_buy', default: true, nullable: true })
  allowBuy: boolean;

  @Column({ nullable: true })
  min: boolean;

  @Column({ name: 'limit_all', default: 2147483647, nullable: true })
  limitAll: number;

  @Column({ name: 'limit_all_max', default: 2147483647, nullable: true })
  limitAllMax: number;
}