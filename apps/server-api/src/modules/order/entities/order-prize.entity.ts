import { Entity, Column } from 'typeorm';
import { BaseEntity } from '../../../common/entities/base.entity';

@Entity('order_prize')
export class OrderPrize extends BaseEntity {
  @Column({ name: 'prize_type', length: 50, nullable: true })
  prizeType: string;

  @Column({ name: 'prize_description', length: 255, nullable: true })
  prizeDescription: string;

  @Column({ name: 'not_recycle_prize', default: false, nullable: true })
  notRecyclePrize: boolean;

  @Column({ name: 'evaluate_prize', default: false, nullable: true })
  evaluatePrize: boolean;
}