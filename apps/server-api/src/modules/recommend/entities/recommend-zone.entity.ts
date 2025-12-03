import { Entity, Column, Index } from 'typeorm';
import { BaseEntity } from '../../../common/entities/base.entity';

@Entity('recommend_zone')
@Index('idx_sort_display', ['sort', 'display'])
export class RecommendZone extends BaseEntity {
  @Column({ length: 255 })
  name: string;

  @Column({ name: 'name_pic', length: 255, nullable: true })
  namePic: string;

  @Column({ name: 'name_type', length: 50, default: 'text', nullable: true })
  nameType: string;

  @Column({ length: 255, nullable: true })
  subhead: string;

  @Column({ length: 50 })
  type: string;

  @Column({ name: 'show_num', default: 0, nullable: true })
  showNum: number;

  @Column({ name: 'link_type', length: 50, nullable: true })
  linkType: string;

  @Column({ name: 'link_value', length: 255, nullable: true })
  linkValue: string;

  @Column({ name: 'link_name', length: 100, nullable: true })
  linkName: string;

  @Column({ default: true })
  display: boolean;

  @Column({ default: 0, nullable: true })
  sort: number;

  @Column({ name: 'order_category_id', nullable: true })
  orderCategoryId: number;

  @Column({ name: 'have_sensors', default: false, nullable: true })
  haveSensors: boolean;

  @Column({ name: 'created_at', type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;

  @Column({ name: 'updated_at', type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  updatedAt: Date;
}