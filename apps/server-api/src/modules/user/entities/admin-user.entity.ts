import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity('admin_users')
export class AdminUser {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ unique: true, comment: '管理员用户名' })
  username: string;

  @Column({ select: false, comment: '加密后的密码' }) // select: false 查用户信息时不默认返回密码，安全！
  password: string;

  @Column({ nullable: true, comment: '昵称' })
  nickname: string;

  @Column({ nullable: true, comment: '头像' })
  avatar: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
