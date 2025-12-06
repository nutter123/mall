import { Entity, Column, Index } from 'typeorm';
import { BaseEntity } from '../../../common/entities/base.entity';

@Entity('user_coupon')
@Index('idx_user_status', ['userId', 'status'])
export class UserCoupon extends BaseEntity {
  @Column({ name: 'user_id' })
  userId: number;

  @Column({ name: 'coupon_template_id' })
  couponTemplateId: number;

  @Column({ length: 20, default: 'UNUSED' })
  status: string;

  @Column({ name: 'received_time', type: 'datetime', default: () => 'CURRENT_TIMESTAMP' })
  receivedTime: Date;

  @Column({ name: 'used_time', type: 'datetime', nullable: true })
  usedTime: Date;
}