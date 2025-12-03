import { Entity, Column, Index } from 'typeorm';
import { BaseEntity } from '../../../common/entities/base.entity';

@Entity('product_spec_key')
@Index('idx_spu_id', ['spuId'])
export class ProductSpecKey extends BaseEntity {
  @Column({ name: 'spu_id' })
  spuId: number;

  @Column({ name: 'spec_name', length: 100 })
  specName: string;
}