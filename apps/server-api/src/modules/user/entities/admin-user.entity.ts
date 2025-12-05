import { Entity, Column } from 'typeorm';
import { BaseEntity } from '../../../common/entities/base.entity';
@Entity('admin_user')
export class AdminUser extends BaseEntity {
  @Column({ unique: true, comment: '管理员用户名' })
  username: string;

  @Column({ select: false, comment: '加密后的密码' }) // select: false 查用户信息时不默认返回密码，安全！
  password: string;

  @Column({ unique: true, comment: '手机号', nullable: true })
  phone?: string;

  @Column({ comment: '角色', nullable: true })
  role?: string;

  @Column({ comment: '昵称', nullable: true })
  nickname?: string;

  @Column({ comment: '头像', nullable: true })
  avatar?: string;
}
