import { Entity, Column } from 'typeorm';
import { BaseEntity } from '../../../common/entities/base.entity';

@Entity('coupon_template')
export class CouponTemplate extends BaseEntity {
  @Column({ length: 255 })
  name: string;

  @Column({ name: 'discount_type', length: 50 })
  discountType: string;

  @Column({ name: 'discount_amount' })
  discountAmount: number;

  @Column({ name: 'is_limited_amount', default: false, nullable: true })
  isLimitedAmount: boolean;

  @Column({ name: 'limit_amount_min', default: 0, nullable: true })
  limitAmountMin: number;

  @Column({ name: 'is_combo_coupon', default: false, nullable: true })
  isComboCoupon: boolean;

  @Column({ name: 'valid_from', type: 'datetime', nullable: true })
  validFrom: Date;

  @Column({ name: 'valid_to', type: 'datetime', nullable: true })
  validTo: Date;

  @Column({ name: 'total_supply', default: -1, nullable: true })
  totalSupply: number;

  @Column({ length: 20, default: 'ACTIVE', nullable: true })
  status: string;
}