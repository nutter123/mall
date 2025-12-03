import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class GetStopResVO {
  @ApiProperty({ description: '绑定微信时间' })
  bindTime: string;
  @ApiProperty({ description: '客户端' })
  edition: string;
  @ApiProperty({ description: '链接值' })
  linkValue: string;
  @ApiProperty({ description: '商城置灰' })
  mourningThemeOpen: boolean;
  @ApiProperty({ description: '是否停业' })
  stop: boolean;
  @ApiProperty({ description: '微信openId' })
  openId: string;
  @ApiProperty({ description: '微信unionId' })
  unionId: string;
}