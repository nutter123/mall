import { Entity, Column } from 'typeorm';
import { BaseEntity } from '../../../common/entities/base.entity';

@Entity('promotion_activity')
export class PromotionActivity extends BaseEntity {
  @Column({ length: 255 })
  name: string;

  @Column({ name: 'promotion_code', length: 100, nullable: true })
  promotionCode: string;

  @Column({ name: 'sort_order', default: 0, nullable: true })
  sortOrder: number;

  @Column({ name: 'target_category_id', nullable: true })
  targetCategoryId: number;

  @Column({ name: 'activity_name', length: 255 })
  activityName: string;

  @Column({ name: 'activity_type', length: 50 })
  activityType: string;

  @Column({ length: 100, nullable: true })
  label: string;

  @Column({ name: 'start_time', type: 'datetime' })
  startTime: Date;

  @Column({ name: 'end_time', type: 'datetime' })
  endTime: Date;

  @Column({ length: 50, nullable: true })
  status: string;
}