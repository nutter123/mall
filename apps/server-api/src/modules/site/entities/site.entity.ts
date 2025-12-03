import { Entity, Column } from 'typeorm';
import { BaseEntity } from '../../../common/entities/base.entity';

@Entity('site')
export class Site extends BaseEntity {
  @Column({ length: 100 })
  name: string;

  @Column({ length: 50, nullable: true })
  city: string;

  @Column({ length: 100, nullable: true })
  pinyin: string;

  @Column({ name: 'pinyin_initial', length: 10, nullable: true })
  pinyinInitial: string;

  @Column({ type: 'decimal', precision: 10, scale: 7 })
  latitude: number;

  @Column({ type: 'decimal', precision: 11, scale: 7 })
  longitude: number;

  @Column({ default: 0, nullable: true })
  status: number;

  @Column({ name: 'expected_open_time', type: 'date', nullable: true })
  expectedOpenTime: Date;

  @Column({ name: 'primary_shop_id', nullable: true })
  primaryShopId: number;

  @Column({ name: 'business_start_time', length: 10, nullable: true })
  businessStartTime: string;

  @Column({ name: 'business_end_time', length: 10, nullable: true })
  businessEndTime: string;

  @Column({ name: 'delivery_time_minutes', nullable: true })
  deliveryTimeMinutes: number;

  @Column({ name: 'premium_delivery_time_minutes', nullable: true })
  premiumDeliveryTimeMinutes: number;

  @Column({ name: 'invoice_type', length: 50, nullable: true })
  invoiceType: string;

  @Column({ name: 'provide_special_ticket', default: false, nullable: true })
  provideSpecialTicket: boolean;

  @Column({ name: 'enable_reservation', default: false, nullable: true })
  enableReservation: boolean;

  @Column({ name: 'reservation_start_time', length: 20, nullable: true })
  reservationStartTime: string;

  @Column({ name: 'enable_god_site', default: false, nullable: true })
  enableGodSite: boolean;

  @Column({ name: 'enable_svip_site', default: false, nullable: true })
  enableSvipSite: boolean;

  @Column({ name: 'enable_fast_delivery', default: false, nullable: true })
  enableFastDelivery: boolean;

  @Column({ name: 'enable_retail_dist', default: false, nullable: true })
  enableRetailDist: boolean;

  @Column({ name: 'enable_site_invitation', default: false, nullable: true })
  enableSiteInvitation: boolean;

  @Column({ name: 'has_site_invite_task', default: false, nullable: true })
  hasSiteInviteTask: boolean;

  @Column({ name: 'allow_invitation_cash_out', default: false, nullable: true })
  allowInvitationCashOut: boolean;

  @Column({ name: 'shop_quantity', default: 0, nullable: true })
  shopQuantity: number;

  @Column({ name: 'center_location_coords', length: 50, nullable: true })
  centerLocationCoords: string;

  @Column({ name: 'use_mourning_theme', default: false, nullable: true })
  useMourningTheme: boolean;

  @Column({ name: 'show_delivery_area', default: false, nullable: true })
  showDeliveryArea: boolean;

  @Column({ name: 'enable_transfer_activity', default: false, nullable: true })
  enableTransferActivity: boolean;

  @Column({ default: 1, nullable: true })
  version: number;
}