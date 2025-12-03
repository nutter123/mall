import { Entity, Column, Index } from 'typeorm';
import { BaseEntity } from '../../../common/entities/base.entity';

@Entity('promotion_product_link')
@Index('idx_activity_id', ['activityId'])
@Index('idx_product_spu_id', ['productSpuId'])
export class PromotionProductLink extends BaseEntity {
  @Column({ name: 'activity_id' })
  activityId: number;

  @Column({ name: 'product_spu_id' })
  productSpuId: number;

  @Column({ name: 'sort_order', default: 0, nullable: true })
  sortOrder: number;
}