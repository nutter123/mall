import { Entity, Column } from 'typeorm';
import { BaseEntity } from '../../../common/entities/base.entity';

@Entity('user_order')
export class UserOrder extends BaseEntity {
  @Column({ name: 'activity_id', nullable: true })
  activityId: number;

  @Column({ name: 'bespoke_time', type: 'datetime', nullable: true })
  bespokeTime: Date;

  @Column({ name: 'cashback_count', nullable: true })
  cashbackCount: number;

  @Column({ name: 'code_aging', nullable: true })
  codeAging: number;

  @Column({ name: 'delivery_text', length: 255, nullable: true })
  deliveryText: string;

  @Column({ name: 'have_coupon', nullable: true })
  haveCoupon: boolean;

  @Column({ name: 'have_integral', nullable: true })
  haveIntegral: boolean;

  @Column({ name: 'high_value_user_type', nullable: true })
  highValueUserType: number;

  @Column({ name: 'min_img_url', length: 255, nullable: true })
  minImgUrl: string;

  @Column({ name: 'order_create_time', type: 'datetime', nullable: true })
  orderCreateTime: Date;

  @Column({ name: 'order_exceed', nullable: true })
  orderExceed: number;

  @Column({ name: 'order_no', length: 255, nullable: true })
  orderNo: string;

  @Column({ name: 'order_scan_cash', nullable: true })
  orderScanCash: boolean;

  @Column({ name: 'order_type', nullable: true })
  orderType: number;

  @Column({ name: 'pay_money', nullable: true })
  payMoney: number;

  @Column({ name: 'pay_status', nullable: true })
  payStatus: number;

  @Column({ name: 'pay_type', length: 255, nullable: true })
  payType: string;

  @Column({ name: 'pay_way', nullable: true })
  payWay: number;

  @Column({ name: 'prize_type', length: 255, nullable: true })
  prizeType: string;

  @Column({ name: 'receipt_code', length: 255, nullable: true })
  receiptCode: string;

  @Column({ name: 'scan_reward_num', nullable: true })
  scanRewardNum: number;

  @Column({ name: 'second_order_gift_total', nullable: true })
  secondOrderGiftTotal: number;

  @Column({ name: 'site_id', nullable: true })
  siteId: number;

  @Column({ name: 'svip_site', nullable: true })
  svipSite: boolean;

  @Column({ name: 'svip_user', nullable: true })
  svipUser: boolean;

  @Column({ name: 'three_order_gift_sum', nullable: true })
  threeOrderGiftSum: number;

  @Column({ name: 'three_order_gift_total', nullable: true })
  threeOrderGiftTotal: number;

  @Column({ name: 'three_order_introduction', length: 255, nullable: true })
  threeOrderIntroduction: string;

  @Column({ name: 'trace_id', length: 255, nullable: true })
  traceId: string;
}