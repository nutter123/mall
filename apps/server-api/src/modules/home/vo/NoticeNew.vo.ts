import { ApiProperty } from '@nestjs/swagger';

export class NoticeNewVO {
  @ApiProperty({ description: '链接名' })
  linkName: string;

  @ApiProperty({ description: '链接类型（dict_type: content_link_type）' })
  linkType: string;

  @ApiProperty({ description: '链接值' })
  linkValue: string;

  @ApiProperty({ description: '公告内容' })
  noticeContent: string;
}