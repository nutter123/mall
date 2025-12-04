import { Entity, Column, CreateDateColumn, UpdateDateColumn } from 'typeorm';
import { BaseEntity } from '../../../common/entities/base.entity';

/**
 * model User {
  id                 BigInt    @id @default(autoincrement())
  birthday           String?   @db.VarChar(20)
  experience         Int?
  gender             String?   @db.VarChar(10)
  hasPassword        Boolean?  @map("has_password")
  password           String?   @db.VarChar(255)
  hasPayPassword     Boolean?  @map("has_pay_password")
  payPassword        String?   @map("pay_password") @db.VarChar(255)
  icon               String?   @db.VarChar(255)
  integral           Int?
  isSvip             Boolean?  @map("is_svip")
  levelId            BigInt?   @map("level_id")
  levelName          String?   @map("level_name") @db.VarChar(50)
  nickName           String?   @map("nick_name") @db.VarChar(50)
  newUser            Boolean?  @map("new_user")
  oftenCity          String?   @map("often_city") @db.VarChar(50)
  payPasswordDisplay Boolean?  @map("pay_password_display")
  picture            String?   @db.VarChar(255)
  retailer           Boolean?
  tianCai            Boolean?  @map("tian_cai")
  totalAmount        Int?      @map("total_amount")
  userName           String?   @map("user_name") @db.VarChar(50)
  phone              String?   @db.VarChar(20)
  openId             String?   @unique @map("open_id") @db.VarChar(100) // 确保唯一性约束
  createTime         DateTime? @default(now()) @map("create_time")
  updateTime         DateTime? @updatedAt @map("update_time")
  godUser            Boolean?  @default(false) @map("god_user")

  @@map("user")
}
 */
@Entity('user')
export class User extends BaseEntity {

  @Column({ type: 'varchar', length: 20, nullable: true })
  birthday?: string;

  @Column({ type: 'int', nullable: true })
  experience?: number;

  @Column({ type: 'varchar', length: 10, nullable: true })
  gender?: string;

  @Column({ name: 'has_password', type: 'boolean', nullable: true })
  hasPassword?: boolean;

  @Column({ type: 'varchar', length: 255, nullable: true })
  password?: string;

  @Column({ name: 'has_pay_password', type: 'boolean', nullable: true })
  hasPayPassword?: boolean;

  @Column({ name: 'pay_password', type: 'varchar', length: 255, nullable: true })
  payPassword?: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  icon?: string;

  @Column({ type: 'int', nullable: true })
  integral?: number;

  @Column({ name: 'is_svip', type: 'boolean', nullable: true })
  isSvip?: boolean;

  @Column({ name: 'level_id', type: 'bigint', nullable: true })
  levelId?: string;

  @Column({ name: 'level_name', type: 'varchar', length: 50, nullable: true })
  levelName?: string;

  @Column({ name: 'nick_name', type: 'varchar', length: 50, nullable: true })
  nickName?: string;

  @Column({ name: 'new_user', type: 'boolean', nullable: true })
  newUser?: boolean;

  @Column({ name: 'often_city', type: 'varchar', length: 50, nullable: true })
  oftenCity?: string;

  @Column({ name: 'pay_password_display', type: 'boolean', nullable: true })
  payPasswordDisplay?: boolean;

  @Column({ type: 'varchar', length: 255, nullable: true })
  picture?: string;

  @Column({ type: 'boolean', nullable: true })
  retailer?: boolean;

  @Column({ name: 'tian_cai', type: 'boolean', nullable: true })
  tianCai?: boolean;

  @Column({ name: 'total_amount', type: 'int', nullable: true })
  totalAmount?: number;

  @Column({ name: 'user_name', type: 'varchar', length: 50, nullable: true })
  userName?: string;

  @Column({ type: 'varchar', length: 20, nullable: true })
  phone?: string;

  @Column({ name: 'open_id', type: 'varchar', length: 100, unique: true, nullable: true })
  openId?: string;

  @CreateDateColumn({ name: 'create_time' })
  createTime: Date;

  @UpdateDateColumn({ name: 'update_time' })
  updateTime: Date;

  @Column({ name: 'god_user', type: 'boolean', default: false, nullable: true })
  godUser?: boolean;
}
