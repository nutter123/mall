import { Entity, Column, Unique } from 'typeorm';
import { BaseEntity } from '../../../common/entities/base.entity';

@Entity('user_product_interaction')
@Unique('uk_user_spu', ['userId', 'spuId'])
export class UserProductInteraction extends BaseEntity {
  @Column({ name: 'user_id' })
  userId: number;

  @Column({ name: 'spu_id' })
  spuId: number;

  @Column({ name: 'has_collected', default: false, nullable: true })
  hasCollected: boolean;

  @Column({ name: 'purchase_times', default: 0, nullable: true })
  purchaseTimes: number;

  @Column({ name: 'last_purchase_time', type: 'datetime', nullable: true })
  lastPurchaseTime: Date;

  @Column({ name: 'has_subscribed', default: false, nullable: true })
  hasSubscribed: boolean;

  @Column({ name: 'subscribe_id', nullable: true })
  subscribeId: number;
}