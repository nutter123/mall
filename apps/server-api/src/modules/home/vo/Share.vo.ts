import { ApiProperty } from '@nestjs/swagger';

export class ShareVO {
  @ApiProperty({ description: '分享标题' })
  shareTitle: string;
  @ApiProperty({ description: '分享图片' })
  sharePicture: string;
}