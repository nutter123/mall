import { Entity, Column, Unique, Index } from 'typeorm';
import { BaseEntity } from '../../../common/entities/base.entity';

/**
 * model CategoryFilterValue {
  id          BigInt @id @default(autoincrement())
  attributeId BigInt @map("attribute_id")
  valueName   String @map("value_name") @db.VarChar(100)

  @@index([attributeId], map: "idx_attribute_id")
  @@map("category_filter_value")
}
 */
@Entity('category_filter_value')
@Index('idx_attribute_id', ['attributeId'])
export class CategoryFilterValue extends BaseEntity {
	@Column({ name: 'attribute_id' })
	attributeId: number;
	@Column({ name: 'value_name', length: 100 })
	valueName: string;
}