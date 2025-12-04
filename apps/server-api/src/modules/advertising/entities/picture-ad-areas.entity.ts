import { Entity, Column, Index } from 'typeorm';
import { BaseEntity } from '../../../common/entities/base.entity';

@Entity('picture_ad_areas')
@Index('idx_ad_id', ['adId'])
export class PictureAdAreas extends BaseEntity {

  @Column({ name: 'ad_id', type: 'bigint', unsigned: true })
  adId: number;

  @Column({ length: 255 })
  name: string;

  @Column({ length: 100 })
  area: string;

  @Column({ name: 'link_type', length: 100 })
  linkType: string;

  @Column({ name: 'link_value', length: 255 })
  linkValue: string;

  @Column({ name: 'area_rem', length: 255, nullable: true })
  areaRem: string;

  @Column({ name: 'created_at', type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;

  @Column({ name: 'updated_at', type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  updatedAt: Date;
}