import { Entity, Column, Index } from 'typeorm';
import { BaseEntity } from '../../../common/entities/base.entity';

@Entity('product_spec_value')
@Index('idx_key_id', ['specKeyId'])
export class ProductSpecValue extends BaseEntity {
  @Column({ name: 'spec_key_id' })
  specKeyId: number;

  @Column({ name: 'spec_value', length: 100 })
  specValue: string;
}