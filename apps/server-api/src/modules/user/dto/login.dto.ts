import { ApiProperty } from "@nestjs/swagger";

import { IsNotEmpty } from "class-validator";

import { IsString } from "class-validator";

export class LoginAdminDto {
  @ApiProperty({ description: '用户名' })
  @IsNotEmpty({ message: '用户名不能为空' })
  @IsString({ message: '用户名必须是字符串' })
  username: string;

  @ApiProperty({ description: '密码' })
  @IsNotEmpty({ message: '密码不能为空' })
  @IsString({ message: '密码必须是字符串' })
  password: string;
}
