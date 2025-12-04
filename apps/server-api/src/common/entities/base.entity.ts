import { CreateDateColumn, UpdateDateColumn, DeleteDateColumn, PrimaryGeneratedColumn } from 'typeorm';

export abstract class BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @CreateDateColumn({ type: 'datetime', precision: 6, default: () => 'CURRENT_TIMESTAMP(6)', comment: '创建时间' })
  createdAt: Date;

  @UpdateDateColumn({ type: 'datetime', precision: 6, default: () => 'CURRENT_TIMESTAMP(6)', onUpdate: 'CURRENT_TIMESTAMP(6)', comment: '更新时间' })
  updatedAt: Date;

  @DeleteDateColumn({ type: 'datetime', precision: 6, nullable: true, comment: '删除时间' })
  deletedAt: Date;
}
