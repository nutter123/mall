import { ApiProperty } from '@nestjs/swagger';

export class NavigationVO {
  @ApiProperty({ description: '名称' })
  name: string;
  @ApiProperty({ description: '图标' })
  icon: string;
  @ApiProperty({ description: '链接类型' })
  linkType: string;
  @ApiProperty({ description: '链接值' })
  linkValue: string;
}