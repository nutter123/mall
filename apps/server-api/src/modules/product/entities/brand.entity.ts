import { Entity, Column } from 'typeorm';
import { BaseEntity } from '../../../common/entities/base.entity';

@Entity('brand')
export class Brand extends BaseEntity {
  @Column({ length: 100 })
  name: string;

  @Column({ name: 'logo_url', length: 255, nullable: true })
  logoUrl: string;
}