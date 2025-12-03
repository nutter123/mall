import {ApiProperty} from "@nestjs/swagger";

export class RecommendZoneGoodsAndComboReqVO{
  @ApiProperty({ description: "当前页" })
  current: number;
  @ApiProperty({ description: "每页数" })
  size: number;
  @ApiProperty({ description: "推荐专区id" })
  id: number;
}