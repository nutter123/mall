import { ApiProperty } from '@nestjs/swagger';

export class TokenVO {
  @ApiProperty({ description: '联合ID', example: 'union_123456' })
  clickId: string;

  @ApiProperty({ description: '是否已授权', example: true })
  haveAuthorization: boolean;

  @ApiProperty({
    description: '设备 IDFA',
    example: 'xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx',
  })
  idfa: string;

  @ApiProperty({
    description: 'MD5 校验值 (Android 必填)',
    example: 'a1b2c3d4e5f6g7h8',
  })
  md5: string;

  @ApiProperty({
    description: '客户端返回的运营商 Token',
    example: 'op_token_xyz',
  })
  opToken: string;

  @ApiProperty({ description: '开放 ID', example: 'openid_001' })
  openId: string;

  @ApiProperty({ description: '客户端返回的运营商', example: 'CMCC' })
  operator: string;

  @ApiProperty({
    description: '客户端的 Token (用户会话凭证)',
    example: 'jwt_token_1234567890abcdef',
  })
  token: string;

  @ApiProperty({ description: '联合 ID (Union ID)', example: 'union_id_abc' })
  unionId: string;

  constructor(partial?: Partial<TokenVO>) {
    Object.assign(this, partial);
  }
}
