import { Entity, Column } from 'typeorm';
import { BaseEntity } from '../../../common/entities/base.entity';

@Entity('order_cancel')
export class OrderCancel extends BaseEntity {
  @Column({ name: 'order_id', primary: true, generated: 'increment' })
  orderId: number;

  @Column({ type: 'tinyint', nullable: true })
  stage: number;

  @Column({ type: 'tinyint', nullable: true })
  type: number;

  @Column({ name: 'user_cancel_type', type: 'tinyint', nullable: true })
  userCancelType: number;

  @Column({ type: 'tinyint', nullable: true })
  status: number;

  @Column({ length: 255, nullable: true })
  reason: string;

  @Column({ length: 255, nullable: true })
  remarks: string;

  @Column({ name: 'apply_time', type: 'datetime', nullable: true })
  applyTime: Date;

  @Column({ name: 'cancel_time', type: 'datetime', nullable: true })
  cancelTime: Date;
}