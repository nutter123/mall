import { Entity, Column, Index } from 'typeorm';
import { BaseEntity } from '../../../common/entities/base.entity';

@Entity('order_delivery')
@Index('idx_delivery_user_id', ['deliveryUserId'])
export class OrderDelivery extends BaseEntity {
  @Column({ name: 'order_id', primary: true, generated: 'increment' })
  orderId: number;

  @Column({ name: 'delivery_user_id', nullable: true })
  deliveryUserId: number;

  @Column({ name: 'delivery_name', length: 100, nullable: true })
  deliveryName: string;

  @Column({ name: 'delivery_way', type: 'tinyint', nullable: true })
  deliveryWay: number;

  @Column({ name: 'delivery_type', type: 'tinyint', nullable: true })
  deliveryType: number;

  @Column({ name: 'delivery_status', type: 'tinyint', nullable: true })
  deliveryStatus: number;

  @Column({ name: 'delivery_text', length: 255, nullable: true })
  deliveryText: string;

  @Column({ name: 'delivery_distance', nullable: true })
  deliveryDistance: number;

  @Column({ nullable: true })
  distance: number;

  @Column({ name: 'delivery_position', length: 50, nullable: true })
  deliveryPosition: string;

  @Column({ name: 'delivery_img', length: 255, nullable: true })
  deliveryImg: string;

  @Column({ name: 'delivery_remark', length: 255, nullable: true })
  deliveryRemark: string;

}