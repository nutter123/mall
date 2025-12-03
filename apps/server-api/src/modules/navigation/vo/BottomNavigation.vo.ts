import {ApiProperty} from "@nestjs/swagger";

export class BottomNavigationVO{
  @ApiProperty({ description: '底色' })
  backColor: string;

  @ApiProperty({ description: '回到顶部图标' })
  backToTopIcon: string;

  @ApiProperty({ description: '回到顶部名称' })
  backToTopName: string;

  @ApiProperty({ description: '回到顶部颜色' })
  backToTopNameColor: string;

  @ApiProperty({ description: '高亮图标' })
  highlightIcon: string;

  @ApiProperty({ description: '高亮名称颜色' })
  highlightNameColor: string;

  @ApiProperty({ description: '图标' })
  icon: string;

  @ApiProperty({ description: '链接名' })
  linkName: string;

  @ApiProperty({ description: '链接类型（dict_type: content_link_type）' })
  linkType: string;

  @ApiProperty({ description: '链接值' })
  linkValue: string;

  @ApiProperty({ description: '名称' })
  name: string;

  @ApiProperty({ description: '名称颜色' })
  nameColor: string;

  @ApiProperty({ description: '排序' })
  sort: number;
}