import { Entity, Column } from 'typeorm';
import { BaseEntity } from '../../../common/entities/base.entity';

@Entity('article')
export class Article extends BaseEntity {
  @Column({ name: 'article_type', length: 50 })
  articleType: string;

  @Column({ length: 255 })
  title: string;

  @Column({ type: 'longtext', nullable: true })
  content: string;

  @Column({ name: 'sort_order', default: 0, nullable: true })
  sortOrder: number;

  @Column({ length: 20, default: 'PUBLISHED', nullable: true })
  status: string;

  @Column({ name: 'created_at', type: 'datetime', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;

  @Column({ name: 'updated_at', type: 'datetime', default: () => 'CURRENT_TIMESTAMP' })
  updatedAt: Date;
}