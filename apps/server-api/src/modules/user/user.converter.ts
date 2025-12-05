import { Injectable } from '@nestjs/common';
import { User } from './entities/user.entity';
import { AdminUser } from './entities/admin-user.entity';
import { plainToInstance } from 'class-transformer';
import { AdminUserVo } from './vo/admin-user.vo';

@Injectable()
export class UserConverter {
  /**
   * 将 Prisma User Model 转换为 UserVO (剥离敏感数据，转换格式)
   */
  toVO(entity: User) {
    return entity;
  }
  /**
   * 将 Prisma User Model 转换为 AdminUserVO (剥离敏感数据，转换格式)
   */
  toAdminUserVo(entity: AdminUser) {
    return plainToInstance(AdminUserVo, entity);
  }
}
