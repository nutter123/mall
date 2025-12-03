import { Entity, Column, Unique } from 'typeorm';
import { BaseEntity } from '../../../common/entities/base.entity';

@Entity('category_filter_attribute')
@Unique('uk_name', ['name'])
export class CategoryFilterAttribute extends BaseEntity {
  @Column({ length: 100 })
  name: string;
}