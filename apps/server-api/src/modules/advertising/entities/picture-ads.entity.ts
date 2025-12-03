import { Entity, Column } from 'typeorm';
import { BaseEntity } from '../../../common/entities/base.entity';

@Entity('picture_ads')
export class PictureAds extends BaseEntity {
  @Column({ type: 'bigint', unsigned: true })
  id: number;

  @Column({ length: 255 })
  name: string;

  @Column({ length: 1024 })
  pic: string;

  @Column({ default: true })
  status: boolean;

  @Column({ name: 'created_at', type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;

  @Column({ name: 'updated_at', type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  updatedAt: Date;
}