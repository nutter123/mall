import { ApiProperty } from '@nestjs/swagger';

export class SiteVO {
  @ApiProperty({ description: '站点ID', example: '25' })
  id: string;

  @ApiProperty({ description: '站点名称', example: '南宁' })
  siteName: string;

  @ApiProperty({ description: '开放状态', example: true })
  openStatus: boolean;

  @ApiProperty({ description: '开放状态新', example: 1 })
  openStatusNew: number;

  @ApiProperty({ description: '预计开放时间', example: '2022-06-22' })
  expectedOpenTime: string;

  @ApiProperty({ description: '版本', example: 2 })
  version: number;

  @ApiProperty({ description: '城市' })
  city: string | null;

  @ApiProperty({ description: '首字母拼音' })
  firstPinYin: string | null;

  @ApiProperty({ description: '拼音' })
  pinYin: string | null;

  @ApiProperty({ description: '是否营业' })
  isBusiness: boolean | null;

  @ApiProperty({ description: '是否转运' })
  isTransfer: boolean | null;

  @ApiProperty({ description: '区域', example: true })
  areas: boolean;

  @ApiProperty({ description: '店铺ID', example: '140' })
  shopId: string;
}
