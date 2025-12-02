import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, OneToMany } from 'typeorm';
import { Sku } from './sku.entity'; // 稍后创建这个文件

@Entity('products') // 数据库表名
export class Product {
  @PrimaryGeneratedColumn('uuid') // 大厂标准：使用 UUID 而不是自增 ID，防止被爬虫遍历
  id!: string;

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

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
