import { Injectable } from '@nestjs/common';
import { User } from './entities/user.entity';

@Injectable()
export class UserConverter {
  /**
   * 将 Prisma User Model 转换为 UserVO (剥离敏感数据，转换格式)
   */
  toVO(entity: User) {
    return entity;
  }
}
