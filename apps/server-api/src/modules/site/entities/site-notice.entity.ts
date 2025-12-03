import { Entity, Column, Index } from 'typeorm';
import { BaseEntity } from '../../../common/entities/base.entity';

@Entity('site_notice')
@Index('idx_site_id', ['siteId'])
export class SiteNotice extends BaseEntity {
  @Column({ name: 'site_id' })
  siteId: number;

  @Column({ length: 255 })
  content: string;

  @Column({ name: 'link_name', length: 50, nullable: true })
  linkName: string;

  @Column({ name: 'link_type', length: 50, nullable: true })
  linkType: string;

  @Column({ name: 'link_value', length: 255, nullable: true })
  linkValue: string;

  @Column({ name: 'sort_order', default: 0, nullable: true })
  sortOrder: number;

  @Column({ name: 'is_active', default: true, nullable: true })
  isActive: boolean;
}