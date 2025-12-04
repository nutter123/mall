import { Entity, Column, Unique } from 'typeorm';
import { BaseEntity } from '../../../common/entities/base.entity';

@Entity('site_wecom_entrance')
@Unique('uk_site_id', ['siteId'])
export class SiteWecomEntrance extends BaseEntity {
  @Column({ name: 'site_id' })
  siteId: string;

  @Column({ name: 'is_open', default: false, nullable: true })
  isOpen: boolean;

  @Column({ name: 'show_area', length: 100, nullable: true })
  showArea: string;

  @Column({ name: 'activity_describe', length: 100, nullable: true })
  activityDescribe: string;

  @Column({ name: 'custom_describe', type: 'text', nullable: true })
  customDescribe: string;

  @Column({ name: 'html_url', length: 255, nullable: true })
  htmlUrl: string;

  @Column({ name: 'mini_url', length: 255, nullable: true })
  miniUrl: string;

  @Column({ name: 'qr_code_url', length: 255, nullable: true })
  qrCodeUrl: string;

  @Column({ name: 'share_title', length: 100, nullable: true })
  shareTitle: string;

  @Column({ name: 'share_pic_url', length: 255, nullable: true })
  sharePicUrl: string;

  @Column({ type: 'text', nullable: true })
  remark: string;

  @Column({ name: 'created_at', type: 'datetime', nullable: true })
  createdAt: Date;

  @Column({ name: 'created_by', length: 50, nullable: true })
  createdBy: string;

  @Column({ name: 'updated_at', type: 'datetime', nullable: true })
  updatedAt: Date;

  @Column({ name: 'updated_by', length: 50, nullable: true })
  updatedBy: string;
}