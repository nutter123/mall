import { BaseVO } from '@/common/dto/base-vo';
import { ApiProperty } from '@nestjs/swagger';

// 管理员用户VO
export class AdminUserVo extends BaseVO {

  @ApiProperty({ description: '管理员用户名' })
  username: string;

  @ApiProperty({ description: '手机号', nullable: true })
  phone?: string;

  @ApiProperty({ description: '角色', nullable: true })
  role?: string;

  @ApiProperty({ description: '昵称', nullable: true })
  nickname?: string;

  @ApiProperty({ description: '头像', nullable: true })
  avatar?: string;
}
