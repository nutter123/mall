import { Entity, Column, Unique } from 'typeorm';
import { BaseEntity } from '../../../common/entities/base.entity';

/**
model CategoryProductRelation {
  id         BigInt    @id @default(autoincrement())
  categoryId BigInt    @map("category_id")
  productId  BigInt    @map("product_id")
  createTime DateTime? @default(now()) @map("create_time") @db.DateTime(0)
  updateTime DateTime? @default(now()) @map("update_time") @db.DateTime(0)

  @@unique([categoryId, productId], map: "uk_category_good")
  @@index([categoryId], map: "idx_category_id")
  @@index([productId], map: "idx_good_id")
  @@map("category_product_relation")
}
 */
@Entity('category_product_relation')
@Unique('uk_category_product', ['categoryId', 'productId'])
export class CategoryProductRelation extends BaseEntity {
	@Column({ name: 'category_id' })
	categoryId: number;
	@Column({ name: 'product_id' })
	productId: number;
}