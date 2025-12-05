import { ApiProperty } from '@nestjs/swagger';

export class GetSiteByLocationReqVO {
  @ApiProperty({ description: '经度', required: true })
  lng: number;

  @ApiProperty({ description: '纬度', required: true })
  lat: number;
}
