import { Entity, Column, Unique } from 'typeorm';
import { BaseEntity } from '../../../common/entities/base.entity';

/**
model ComboPackageItem {
  id             BigInt @id @default(autoincrement())
  comboPackageId BigInt @map("combo_package_id")
  productSkuId   BigInt @map("product_sku_id")
  quantity       Int    @default(1)
  inListDisplay  Int?   @default(1) @map("in_list_display")
  sortOrder      Int?   @default(0) @map("sort_order")

  @@index([comboPackageId], map: "idx_combo_package_id")
  @@index([productSkuId], map: "idx_product_sku_id")
  @@map("combo_package_item")
}
 */

@Entity({ name: 'combo_package_item' })
@Unique(['comboPackageId', 'productSkuId'])
export class ComboPackageItem extends BaseEntity {
  @Column({ name: 'combo_package_id', type: 'bigint' })
  comboPackageId: number;

  @Column({ name: 'product_sku_id', type: 'bigint' })
  productSkuId: number;

  @Column({ type: 'int', default: 1 })
  quantity: number;

  @Column({ name: 'in_list_display', type: 'int', nullable: true, default: 1 })
  inListDisplay: number | null;

  @Column({ name: 'sort_order', type: 'int', nullable: true, default: 0 })
  sortOrder: number | null;
}
