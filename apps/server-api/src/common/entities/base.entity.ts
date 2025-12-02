import { CreateDateColumn, UpdateDateColumn, DeleteDateColumn, PrimaryGeneratedColumn } from 'typeorm';

export abstract class BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @CreateDateColumn({ comment: '创建时间' })
  createdAt: Date;

  @UpdateDateColumn({ comment: '更新时间' })
  updatedAt: Date;

  // 软删除核心：如果该字段有值，代表已删除；为 null 代表正常
  // 查询时，TypeORM 默认会自动加上 WHERE deletedAt IS NULL
  @DeleteDateColumn({ comment: '删除时间', select: false })
  deletedAt: Date;
}
