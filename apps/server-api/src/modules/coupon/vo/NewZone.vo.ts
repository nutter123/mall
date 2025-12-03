import { ApiProperty } from '@nestjs/swagger';
import {GoodVO} from "../../goods/vo/Good.vo";

export class NewZoneVO {
  @ApiProperty({ description: '名称' })
  name: string;
  @ApiProperty({ description: '背景图' })
  pic: string;
  @ApiProperty({ description: '显示数量（小于0为显示全部）' })
  showNum: number;
  @ApiProperty({ description: '链接类型（dict_type: content_link_type）' })
  linkType: string;
  @ApiProperty({ description: '链接值' })
  linkValue: string;
  @ApiProperty({ description: '新人专区商品' })
  goodsList: GoodVO[];
}
