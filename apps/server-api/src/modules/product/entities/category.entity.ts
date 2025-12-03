import { Entity, Column } from 'typeorm';
import { BaseEntity } from '../../../common/entities/base.entity';

@Entity('category')
export class Category extends BaseEntity {
  @Column({ name: 'parent_id', default: 0, nullable: true })
  parentId: number;

  @Column({ name: 'category_name', length: 255 })
  categoryName: string;

  @Column({ length: 255, nullable: true })
  icon: string;

  @Column({ name: 'background_color', length: 50, nullable: true })
  backgroundColor: string;

  @Column({ name: 'goods_num', default: 0, nullable: true })
  goodsNum: number;

  @Column({ name: 'menu_type', length: 50 })
  menuType: string;

  @Column({ name: 'promotion_code', length: 100, nullable: true })
  promotionCode: string;

  @Column({ default: 0, nullable: true })
  sort: number;
}