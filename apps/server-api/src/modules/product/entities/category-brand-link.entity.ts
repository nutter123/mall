import { Entity, Column, Unique } from 'typeorm';
import { BaseEntity } from '../../../common/entities/base.entity';

@Entity('category_brand_link')
@Unique('uk_category_brand', ['categoryId', 'brandId'])
export class CategoryBrandLink extends BaseEntity {
  @Column({ name: 'category_id' })
  categoryId: number;

  @Column({ name: 'brand_id' })
  brandId: number;
}