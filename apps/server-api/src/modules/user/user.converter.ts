import { Injectable } from '@nestjs/common';
import { User } from './entities/user.entity';

@Injectable()
export class UserConverter {
  /**
   * 将 Prisma User Model 转换为 UserVO (剥离敏感数据，转换格式)
   */
  toVO(entity: User) {
    const { password, payPassword, ...safeUser } = entity;

    // 强制类型转换，解决 BigInt -> Number 的问题
    const userId = safeUser.id;
    const levelId = safeUser.levelId;

    return {
      ...safeUser,
      levelId: levelId,
      id: userId,
    };
  }
}
