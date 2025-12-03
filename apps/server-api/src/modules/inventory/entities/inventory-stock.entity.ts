import { Entity, Column, Unique, Index } from 'typeorm';
import { BaseEntity } from '../../../common/entities/base.entity';

@Entity('inventory_stock')
@Unique('uk_sku_location', ['skuId', 'locationId', 'locationType'])
@Index('idx_location', ['locationId', 'locationType'])
export class InventoryStock extends BaseEntity {
  @Column({ name: 'sku_id' })
  skuId: number;

  @Column({ name: 'location_id' })
  locationId: number;

  @Column({ name: 'location_type', length: 20 })
  locationType: string;

  @Column({ name: 'stock_quantity', default: 0, nullable: true })
  stockQuantity: number;
}