import { Entity, Column, Unique } from 'typeorm';
import { BaseEntity } from '../../../common/entities/base.entity';

/**
 * model ComboPackage {
  id                  BigInt   @id @default(autoincrement())
  name                String   @db.VarChar(255)
  title               String?  @db.VarChar(255)
  coverUrl            String?  @map("cover_url") @db.VarChar(255)
  price               Int
  minusAmount         Int?     @default(0) @map("minus_amount")
  isDisabled          Boolean? @default(false) @map("is_disabled")
  isHidden            Boolean? @default(false) @map("is_hidden")
  hideOnStockShortage Boolean? @default(false) @map("hide_on_stock_shortage")
  limitStockAll       Int?     @map("limit_stock_all")
  limitStockDay       Int?     @map("limit_stock_day")

  @@map("combo_package")
}
 */

@Entity('combo_package')
@Unique(['name'])
export class ComboPackage extends BaseEntity {
  @Column({ type: 'varchar', length: 255 })
  name: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  title?: string;

  @Column({ name: 'cover_url', type: 'varchar', length: 255, nullable: true })
  coverUrl?: string;

  @Column({ type: 'int' })
  price: number;

  @Column({ name: 'minus_amount', type: 'int', default: 0 })
  minusAmount?: number;

  @Column({ name: 'is_disabled', type: 'boolean', default: false })
  isDisabled?: boolean;

  @Column({ name: 'is_hidden', type: 'boolean', default: false })
  isHidden?: boolean;

  @Column({ name: 'hide_on_stock_shortage', type: 'boolean', default: false })
  hideOnStockShortage?: boolean;

  @Column({ name: 'limit_stock_all', type: 'int', nullable: true })
  limitStockAll?: number;

  @Column({ name: 'limit_stock_day', type: 'int', nullable: true })
  limitStockDay?: number;
}
