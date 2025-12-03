import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, IsOptional, IsBoolean } from 'class-validator';

/**
 * 后台登录请求参数
 * Path: /test-api/user/login
 */
export class AdminLoginDto {
  @ApiProperty({ description: '用户名', example: 'xiaochengxu' })
  @IsString()
  @IsNotEmpty()
  userName: string; // 注意：公司接口用的是 userName 不是 username

  @ApiProperty({ description: '密码', example: '123123' })
  @IsString()
  @IsNotEmpty()
  password: string;

  @ApiProperty({ description: '图形验证码', required: false, example: '' })
  @IsOptional()
  imgCode?: string;

  @ApiProperty({ description: '是否校验图形验证码', example: false })
  @IsOptional()
  imgCodeValidate?: boolean;
}