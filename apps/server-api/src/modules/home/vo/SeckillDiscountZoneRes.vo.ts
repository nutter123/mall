import {ApiProperty} from "@nestjs/swagger";
import {GoodVO} from "../../goods/vo/Good.vo";

export class SeckillDiscountZoneResVO{
  @ApiProperty({ description: '最近结束时间' })
  detailEnd: string;

  @ApiProperty({ description: '最近开始时间' })
  detailStart: string;

  @ApiProperty({ description: '专区显示区域(dict_type:content_zone_display_region)' })
  displayRegion: string;

  @ApiProperty({ description: '商品列表' })
  goodsList: GoodVO[];

  @ApiProperty({ description: '链接类型（dict_type: content_link_type）' })
  linkType: string;

  @ApiProperty({ description: '链接值' })
  linkValue: string;

  @ApiProperty({ description: '名称' })
  name: string;

  @ApiProperty({ description: '背景图' })
  pic: string;
}