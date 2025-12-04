import {
  Entity,
  Column,
  ManyToOne,
  JoinColumn
} from 'typeorm';
import { Product } from './product.entity';
import { BaseEntity } from '../../../common/entities/base.entity';

@Entity('sku')
export class Sku extends BaseEntity {

  // 价格使用 decimal 类型，精度 10，小数位 2
  // 注意：在 JS 中会被读取为 string，需要手动转 number，这是为了精度安全
  @Column({ type: 'decimal', precision: 10, scale: 2, comment: '价格' })
  price: number;

  @Column({ type: 'int', comment: '库存' })
  stock: number;

  // 重点：规格属性。为了简化单人开发复杂度，我们直接存 JSON
  // 格式示例：{ "color": "黑色", "storage": "128G" }
  // 这样你就不需要去维护复杂的 SpecKey/SpecValue 关联表了，足够 MVP 使用
  @Column({ type: 'json', comment: 'SKU规格属性' })
  attributes: Record<string, string>;

  // 建立与 Product 的多对一关系
  @ManyToOne(() => Product, (product) => product.skus, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'productId' }) // 数据库里会多一列 productId
  product: Product;
}
