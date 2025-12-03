import {ApiProperty} from "@nestjs/swagger";

export class GetListResVO{
  @ApiProperty({ description: '图片' })
  pic: string;

  @ApiProperty({ description: 'id' })
  id: string;

  @ApiProperty({ description: '链接类型（dict_type)' })
  linkType: string;

  @ApiProperty({ description: '链接值' })
  linkValue: string;

  @ApiProperty({ description: '名称' })
  name: string;

  @ApiProperty({ description: '位置' })
  position: string;

  @ApiProperty({ description: '排序' })
  sort: number;

  @ApiProperty({ description: '是否展示广告标签' })
  tag: boolean;
}