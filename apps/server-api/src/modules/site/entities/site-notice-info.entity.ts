import { Entity, Column, Index } from 'typeorm';
import { BaseEntity } from '../../../common/entities/base.entity';

@Entity('site_notice_info')
@Index('idx_site_id', ['siteId'])
export class SiteNoticeInfo extends BaseEntity {
  @Column({ name: 'site_id' })
  siteId: number;

  @Column({ length: 255, nullable: true })
  title: string;

  @Column({ type: 'text', nullable: true })
  content: string;

  @Column({ name: 'create_time', type: 'datetime', default: () => 'CURRENT_TIMESTAMP', nullable: true })
  createTime: Date;
}