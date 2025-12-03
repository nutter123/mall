import { Entity, Column, Index } from 'typeorm';
import { BaseEntity } from '../../../common/entities/base.entity';

@Entity('product_image')
@Index('idx_spu_id', ['skuId'])
export class ProductImage extends BaseEntity {
  @Column({ name: 'sku_id' })
  skuId: number;

  @Column({ name: 'img_url', length: 255 })
  imgUrl: string;

  @Column({ name: 'sort_order', default: 0, nullable: true })
  sortOrder: number;
}