import { Entity, Column, Index } from 'typeorm';
import { BaseEntity } from '../../../common/entities/base.entity';

@Entity('we_com_entrance')
@Index('idx_created_date', ['createdDate'])
@Index('idx_open', ['open'])
@Index('idx_site_id', ['siteId'])
export class WeComEntrance extends BaseEntity {
  @Column({ name: 'site_id', nullable: true })
  siteId: number;

  @Column({ name: 'activity_describe', length: 255, nullable: true })
  activityDescribe: string;

  @Column({ name: 'created_by', length: 50, nullable: true })
  createdBy: string;

  @Column({ name: 'created_date', type: 'datetime', nullable: true })
  createdDate: Date;

  @Column({ name: 'created_date_end', type: 'datetime', nullable: true })
  createdDateEnd: Date;

  @Column({ name: 'created_date_start', type: 'datetime', nullable: true })
  createdDateStart: Date;

  @Column({ name: 'created_name', length: 100, nullable: true })
  createdName: string;

  @Column({ name: 'custom_describe', type: 'text', nullable: true })
  customDescribe: string;

  @Column({ name: 'goods_detail_custom_describe', type: 'text', nullable: true })
  goodsDetailCustomDescribe: string;

  @Column({ name: 'goods_detail_describe', length: 255, nullable: true })
  goodsDetailDescribe: string;

  @Column({ name: 'goods_detail_discount_custom_describe', type: 'text', nullable: true })
  goodsDetailDiscountCustomDescribe: string;

  @Column({ name: 'goods_detail_discount_describe', length: 255, nullable: true })
  goodsDetailDiscountDescribe: string;

  @Column({ name: 'html_url', length: 500, nullable: true })
  htmlUrl: string;

  @Column({ name: 'last_modified_by', length: 50, nullable: true })
  lastModifiedBy: string;

  @Column({ name: 'last_modified_date', type: 'datetime', nullable: true })
  lastModifiedDate: Date;

  @Column({ name: 'last_modified_date_end', type: 'datetime', nullable: true })
  lastModifiedDateEnd: Date;

  @Column({ name: 'last_modified_date_start', type: 'datetime', nullable: true })
  lastModifiedDateStart: Date;

  @Column({ name: 'last_modified_name', length: 100, nullable: true })
  lastModifiedName: string;

  @Column({ name: 'mini_url', length: 500, nullable: true })
  miniUrl: string;

  @Column({ default: false })
  open: boolean;

  @Column({ name: 'personal_describe', length: 255, nullable: true })
  personalDescribe: string;

  @Column({ name: 'pro_bg', length: 500, nullable: true })
  proBg: string;

  @Column({ name: 'qr_code', length: 500, nullable: true })
  qrCode: string;

  @Column({ type: 'text', nullable: true })
  remark: string;

  @Column({ type: 'text', nullable: true })
  rule: string;

  @Column({ name: 'share_pic', length: 500, nullable: true })
  sharePic: string;

  @Column({ name: 'share_title', length: 255, nullable: true })
  shareTitle: string;

  @Column({ name: 'show_area', length: 100, nullable: true })
  showArea: string;

  @Column({ name: 'we_chat_short_url', length: 500, nullable: true })
  weChatShortUrl: string;

  @Column({ name: 'data_permission', type: 'text', nullable: true })
  dataPermission: string;

  @Column({ name: 'create_time', type: 'datetime', default: () => 'CURRENT_TIMESTAMP', nullable: true })
  createTime: Date;

  @Column({ name: 'update_time', type: 'datetime', default: () => 'CURRENT_TIMESTAMP', nullable: true })
  updateTime: Date;
}