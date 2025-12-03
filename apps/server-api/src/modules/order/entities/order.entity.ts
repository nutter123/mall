import { Entity, Column, Index } from 'typeorm';
import { BaseEntity } from '../../../common/entities/base.entity';

@Entity('order')
@Index('idx_order_no', ['orderNo'])
export class Order extends BaseEntity {
  @Column({ name: 'order_type', type: 'tinyint' })
  orderType: number;

  @Column({ name: 'order_no', length: 50 })
  orderNo: string;

  @Column({ name: 'order_channel_no', length: 50, nullable: true })
  orderChannelNo: string;

  @Column({ name: 'site_id' })
  siteId: number;

  @Column({ name: 'site_name', length: 100, nullable: true })
  siteName: string;

  @Column({ name: 'shop_name', length: 100, nullable: true })
  shopName: string;

  @Column({ name: 'shop_location', length: 50, nullable: true })
  shopLocation: string;

  @Column({ name: 'total_money' })
  totalMoney: number;

  @Column({ name: 'discount_money' })
  discountMoney: number;

  @Column({ name: 'pay_money' })
  payMoney: number;

  @Column({ name: 'pay_status', type: 'tinyint', nullable: true })
  payStatus: number;

  @Column({ name: 'pay_way', type: 'tinyint', nullable: true })
  payWay: number;

  @Column({ name: 'mall_status', type: 'tinyint', nullable: true })
  mallStatus: number;

  @Column({ type: 'tinyint', nullable: true })
  status: number;

  @Column({ name: 'bespoke_time', type: 'datetime', nullable: true })
  bespokeTime: Date;

  @Column({ name: 'order_create_time', type: 'datetime', default: () => 'CURRENT_TIMESTAMP' })
  orderCreateTime: Date;

  @Column({ name: 'order_pay_time', type: 'datetime', nullable: true })
  orderPayTime: Date;

  @Column({ name: 'order_pay_limit_time', nullable: true })
  orderPayLimitTime: number;

  @Column({ name: 'order_pay_end_time', type: 'datetime', nullable: true })
  orderPayEndTime: Date;

  @Column({ name: 'produce_type', type: 'tinyint', nullable: true })
  produceType: number;

  @Column({ name: 'cash_on_delivery', default: false, nullable: true })
  cashOnDelivery: boolean;

  @Column({ name: 'lon_lat', length: 50, nullable: true })
  lonLat: string;

  @Column({ name: 'is_svip_site', default: false, nullable: true })
  isSvipSite: boolean;

  @Column({ name: 'is_apply_invoice', default: false, nullable: true })
  isApplyInvoice: boolean;

  @Column({ name: 'provide_special_ticke', default: false, nullable: true })
  provideSpecialTicke: boolean;

  @Column({ name: 'settlement_order_no', length: 50, nullable: true })
  settlementOrderNo: string;

  @Column({ name: 'settlement_status', type: 'tinyint', nullable: true })
  settlementStatus: number;

  @Column({ name: 'business_type', type: 'tinyint', nullable: true })
  businessType: number;

  @Column({ name: 'order_is_modify', default: false, nullable: true })
  orderIsModify: boolean;

  @Column({ name: 'order_goods_quantity', default: 0, nullable: true })
  orderGoodsQuantity: number;

  @Column({ name: 'user_id', nullable: true })
  userId: number;

  @Column({ name: 'handle_status', nullable: true })
  handleStatus: number;

  @Column({ name: 'order_distribute_time', type: 'datetime', nullable: true })
  orderDistributeTime: Date;

  @Column({ name: 'order_accept_time', type: 'datetime', nullable: true })
  orderAcceptTime: Date;

  @Column({ name: 'order_delivery_time', type: 'datetime', nullable: true })
  orderDeliveryTime: Date;

  @Column({ name: 'order_finish_time', type: 'datetime', nullable: true })
  orderFinishTime: Date;

  @Column({ name: 'produce_org', nullable: true })
  produceOrg: number;

  @Column({ name: 'reminder_num', nullable: true })
  reminderNum: number;

  @Column({ name: 'reminder_status', nullable: true })
  reminderStatus: boolean;

  @Column({ name: 'invoice_status', nullable: true })
  invoiceStatus: number;

  @Column({ name: 'limit_after_sales', nullable: true })
  limitAfterSales: boolean;

  @Column({ name: 'order_evaluate', nullable: true })
  orderEvaluate: boolean;

  @Column({ name: 'order_delivery_evaluate', nullable: true })
  orderDeliveryEvaluate: boolean;

  @Column({ name: 'overtime_payment_approve_status', default: false, nullable: true })
  overtimePaymentApproveStatus: boolean;

  @Column({ name: 'no_overtime_payment_type', default: false, nullable: true })
  noOvertimePaymentType: boolean;

  @Column({ name: 'is_replenish_invoice', default: false, nullable: true })
  isReplenishInvoice: boolean;

  @Column({ length: 255, nullable: true })
  description: string;

  @Column({ name: 'table_no', length: 50, nullable: true })
  tableNo: string;

  @Column({ name: 'table_people', length: 50, nullable: true })
  tablePeople: string;

  @Column({ name: 'speed_delivery_id', length: 50, nullable: true })
  speedDeliveryId: string;

  @Column({ length: 50, nullable: true })
  spilt: string;

  @Column({ name: 'receipt_code', length: 50, nullable: true })
  receiptCode: string;

  @Column({ name: 'receipt_detail', length: 50, nullable: true })
  receiptDetail: string;

  @Column({ name: 'high_value_user_type', length: 50, nullable: true })
  highValueUserType: string;

  @Column({ name: 'pay_money_not_virtual' })
  payMoneyNotVirtual: number;

  @Column({ name: 'order_goods_quantity_not_virtual' })
  orderGoodsQuantityNotVirtual: number;

  @Column({ name: 'integral_num' })
  integralNum: number;

  @Column({ name: 'trace_id', length: 50, nullable: true })
  traceId: string;
}