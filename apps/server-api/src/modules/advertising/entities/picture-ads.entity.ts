import { Entity, Column } from 'typeorm';
import { BaseEntity } from '../../../common/entities/base.entity';

@Entity('picture_ads')
export class PictureAds extends BaseEntity {

  @Column({ length: 255 })
  name: string;

  @Column({ length: 1024 })
  pic: string;

  @Column({ default: true })
  status: boolean;

}