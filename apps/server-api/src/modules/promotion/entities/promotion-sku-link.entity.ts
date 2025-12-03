import { Entity, Column, Index } from 'typeorm';
import { BaseEntity } from '../../../common/entities/base.entity';

@Entity('promotion_sku_link')
@Index('idx_activity_id', ['activityId'])
@Index('idx_sku_id', ['skuId'])
export class PromotionSkuLink extends BaseEntity {
  @Column({ name: 'activity_id' })
  activityId: number;

  @Column({ name: 'sku_id' })
  skuId: number;

  @Column({ name: 'promotion_price', nullable: true })
  promotionPrice: number;
}