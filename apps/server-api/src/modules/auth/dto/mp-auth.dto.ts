import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, IsOptional } from 'class-validator';

/**
 * 小程序登录请求参数
 * Path: /v2-app-mall/token/getByWechatMp
 */
export class MpLoginDto {
  @ApiProperty({ description: '微信 AppID', example: 'wx38d12f1dda8b9cac' })
  @IsString()
  @IsNotEmpty()
  appid: string;

  @ApiProperty({ description: '微信登录凭证 Code', example: '0e1k16ll2okTKg4Ehwll2jjumE1k16lT' })
  @IsString()
  @IsNotEmpty()
  jsCode: string;
}

/**
 * 小程序登录响应结构 (VO)
 * 严格对齐公司接口返回
 */
export class MpLoginVo {
  @ApiProperty({ description: '微信 UnionId' })
  unionId: string;

  @ApiProperty({ description: '微信 OpenId' })
  openId: string;

  @ApiProperty({ description: 'JWT 鉴权 Token' })
  token: string;

  @ApiProperty({ description: '是否已授权', example: true })
  haveAuthorization: boolean;

  @ApiProperty({ description: '第二手机号信息(预留)', example: null })
  secondPhoneVo: any;
}

/**
 * 小程序用户信息响应结构 (VO)
 * 包含大量兼容字段
 */
export class MpUserInfoVo {
  @ApiProperty({ description: '用户ID', example: '1419140757536243818' })
  id: string;

  @ApiProperty({ description: '手机号' })
  phone: string;

  @ApiProperty({ description: '昵称' })
  nickName: string;

  @ApiProperty({ description: '头像URL' })
  icon: string;

  // === 以下为兼容字段，暂时写死 ===
  @ApiProperty({ description: '用户名', example: '' })
  userName: string;
  
  @ApiProperty({ description: '性别', example: 'secret' })
  gender: string;
  
  @ApiProperty({ description: '等级名称', example: 'VIP1' })
  levelName: string;
  
  @ApiProperty({ description: '是否新用户', example: true })
  newUser: boolean;
  
  @ApiProperty({ description: '是否SVIP', example: false })
  isSvip: boolean;

  @ApiProperty({ description: '是否分销商', example: true })
  retailer: boolean;
}