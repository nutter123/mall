import {
  Entity,
  Column,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { User } from '../../user/entities/user.entity';
import { Sku } from '../../product/entities/sku.entity';
import { BaseEntity } from '../../../common/entities/base.entity';

@Entity('cart_item')
export class CartItem extends BaseEntity {

  @Column()
  userId: string; // 冗余字段，方便查询

  @Column()
  skuId: string; // 冗余字段

  @Column({ type: 'int', default: 1 })
  count: number;

  // 关联用户
  @ManyToOne(() => User)
  @JoinColumn({ name: 'userId' })
  user: User;

  // 关联 SKU (为了获取价格、库存)
  @ManyToOne(() => Sku)
  @JoinColumn({ name: 'skuId' })
  sku: Sku;
}
