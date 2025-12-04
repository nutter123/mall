import { Entity, Column, OneToMany } from 'typeorm';
import { Sku } from './sku.entity'; // 稍后创建这个文件
import { BaseEntity } from '../../../common/entities/base.entity';

@Entity('product') // 数据库表名
export class Product extends BaseEntity {

  @Column({ comment: '商品名称' })
  title: string;

  @Column({ type: 'text', nullable: true, comment: '商品描述' })
  description: string;

  @Column({ comment: '主图URL' })
  mainImage: string;

  @Column({ type: 'simple-array', nullable: true, comment: '轮播图URLs' })
  images: string[];

  // 0: 下架, 1: 上架
  @Column({ default: 0, comment: '上架状态' })
  status: number;

  // 建立与 SKU 的一对多关系
  // cascade: true 表示保存 Product 时，如果有 SKU 数据，也会自动保存 SKU
  @OneToMany(() => Sku, (sku) => sku.product, { cascade: true })
  skus: Sku[];

}
