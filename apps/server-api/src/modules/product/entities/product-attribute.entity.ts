import { Entity, Column, Index } from 'typeorm';
import { BaseEntity } from '../../../common/entities/base.entity';

@Entity('product_attribute')
@Index('idx_spu_id', ['spuId'])
export class ProductAttribute extends BaseEntity {
  @Column({ name: 'spu_id' })
  spuId: number;

  @Column({ name: 'attribute_name', length: 100 })
  attributeName: string;

  @Column({ name: 'attribute_value', length: 255 })
  attributeValue: string;
}