import { Entity, Column, ManyToOne, JoinColumn } from 'typeorm';
import { BaseEntity } from '../../../common/entities/base.entity'; // 引用你的基类
import { User } from '@/modules/user/entities/user.entity';


// 将这里的schema.prisma转换成typeorm实体类,字段严格按照schema.prisma中的定义
@Entity('address') // 表名
export class Address extends BaseEntity {
  
  @Column({ name: 'user_id' }) // 映射数据库字段名
  userId: string;

  @Column({ name: 'address_detail', length: 255 }) // 指定字段长度
  addressDetail: string;

  @Column({ length: 50, nullable: true }) // nullable表示可选字段
  province: string;

  @Column({ length: 50, nullable: true })
  city: string;

  @Column({ length: 50, nullable: true })
  district: string;

  @Column({ type: 'decimal', precision: 10, scale: 7 }) // decimal类型，精度10，小数位7
  latitude: number;

  @Column({ type: 'decimal', precision: 11, scale: 7 }) // decimal类型，精度11，小数位7
  longitude: number;

  @Column({ length: 100 })
  name: string;

  @Column({ length: 20 })
  phone: string;

  @Column({ length: 10, nullable: true })
  gender: string;

  @Column({ length: 50, nullable: true })
  label: string;

  @Column({ length: 50, nullable: true })
  type: string;

  @Column({ name: 'type_code', length: 50, nullable: true })
  typeCode: string;

  @Column({ length: 255, nullable: true })
  poipoistring: string;

  @Column({ name: 'use_type', length: 50, nullable: true })
  useType: string;

  @Column({ name: 'shop_id', nullable: true })
  shopId: number;

  @Column({ name: 'usage_count', default: 0, nullable: true })
  usageCount: number;

  @Column({ name: 'last_used_date', type: 'datetime', nullable: true })
  lastUsedDate: Date;

  @Column({ name: 'created_date', type: 'datetime', default: () => 'CURRENT_TIMESTAMP' })
  createdDate: Date;

  @Column({ length: 255, nullable: true })
  remark: string;

  @Column({ length: 255, nullable: true })
  poi: string;

  @Column({ name: 'in_site', nullable: true })
  inSite: boolean;

  // 建立与User的多对一关系
  @ManyToOne(() => User)
  @JoinColumn({ name: 'user_id' })
  user: User;
}