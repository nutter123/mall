import { ApiProperty, PartialType } from '@nestjs/swagger';
import { IsNotEmpty, IsString, IsOptional, Length, IsArray } from 'class-validator';

// === 1. 分页查询参数 ===
export class QueryAdminUserDto {
  @ApiProperty({ description: '当前页码', example: 1, required: false })
  @IsOptional()
  current?: number; // AntD Pro 默认传 current

  @ApiProperty({ description: '每页条数', example: 20, required: false })
  @IsOptional()
  pageSize?: number;

  @ApiProperty({ description: '用户名', required: false })
  @IsOptional()
  username?: string;

  @ApiProperty({ description: '昵称', required: false })
  @IsOptional()
  nickname?: string;
  
  @ApiProperty({ description: '开始时间', required: false })
  @IsOptional()
  startTime?: string;

  @ApiProperty({ description: '结束时间', required: false })
  @IsOptional()
  endTime?: string;
}

// === 2. 创建参数 ===
export class CreateAdminUserDto {
  @ApiProperty({ description: '用户名', example: 'admin_test' })
  @IsString()
  @IsNotEmpty({ message: '用户名不能为空' })
  @Length(4, 20, { message: '用户名长度需在4-20位之间' })
  username: string;

  @ApiProperty({ description: '密码', example: '123456' })
  @IsString()
  @IsNotEmpty({ message: '密码不能为空' })
  @Length(6, 20, { message: '密码长度需在6-20位之间' })
  password: string;

  @ApiProperty({ description: '昵称', required: false })
  @IsOptional()
  nickname?: string;

  @ApiProperty({ description: '头像URL', required: false })
  @IsOptional()
  avatar?: string;
}

// === 3. 更新参数 (继承创建，但所有字段可选) ===
export class UpdateAdminUserDto extends PartialType(CreateAdminUserDto) {}

// === 4. 批量删除参数 ===
export class BatchDeleteDto {
  @ApiProperty({ description: 'ID数组', example: ['uuid-1', 'uuid-2'] })
  @IsArray()
  @IsNotEmpty()
  ids: string[];
}
