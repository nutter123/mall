import { Entity, Column, Index } from 'typeorm';
import { BaseEntity } from '../../../common/entities/base.entity';

@Entity('product_other_service')
@Index('idx_spu_id', ['spuId'])
export class ProductOtherService extends BaseEntity {
  @Column({ name: 'spu_id' })
  spuId: number;

  @Column({ name: 'service_code', length: 50 })
  serviceCode: string;

  @Column({ name: 'service_label', length: 100 })
  serviceLabel: string;
}