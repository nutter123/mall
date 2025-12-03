import { ApiProperty } from '@nestjs/swagger';
import {PictureAdAreasVO} from "./PictureAdAreas.vo";

export class PictureAdsVO {
  @ApiProperty({ description: '图片' })
  pic: string;
  @ApiProperty({ description: '名称' })
  name: string;
  @ApiProperty({ description: '图片区域' })
  pictureAreaList: PictureAdAreasVO[];
}