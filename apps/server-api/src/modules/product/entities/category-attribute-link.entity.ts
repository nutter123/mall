import { Entity, Column, Unique } from 'typeorm';
import { BaseEntity } from '../../../common/entities/base.entity';

@Entity('category_attribute_link')
@Unique('uk_category_attribute', ['categoryId', 'attributeId'])
export class CategoryAttributeLink extends BaseEntity {
  @Column({ name: 'category_id' })
  categoryId: number;

  @Column({ name: 'attribute_id' })
  attributeId: number;
}