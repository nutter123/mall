import { Entity, Column } from 'typeorm';
import { BaseEntity } from '../../../common/entities/base.entity';

@Entity('navigation')
export class Navigation extends BaseEntity {
  @Column({ name: 'back_color', length: 255, nullable: true })
  backColor: string;

  @Column({ name: 'back_to_top_icon', length: 255, nullable: true })
  backToTopIcon: string;

  @Column({ name: 'back_to_top_name', length: 255, nullable: true })
  backToTopName: string;

  @Column({ name: 'back_to_top_name_color', length: 255, nullable: true })
  backToTopNameColor: string;

  @Column({ name: 'highlight_icon', length: 255, nullable: true })
  highlightIcon: string;

  @Column({ name: 'highlight_name_color', length: 255, nullable: true })
  highlightNameColor: string;

  @Column({ length: 255, nullable: true })
  icon: string;

  @Column({ name: 'link_name', length: 255, nullable: true })
  linkName: string;

  @Column({ name: 'link_type', length: 255, nullable: true })
  linkType: string;

  @Column({ name: 'link_value', length: 255, nullable: true })
  linkValue: string;

  @Column({ length: 255, nullable: true })
  name: string;

  @Column({ name: 'name_color', length: 255, nullable: true })
  nameColor: string;

  @Column({ nullable: true })
  sort: number;

  @Column({ length: 255, nullable: true })
  type: string;

  @Column({ length: 255, nullable: true })
  slogan: string;
}