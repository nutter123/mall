import {ApiProperty} from "@nestjs/swagger";
import {SiteDetailsVO} from "./SiteDetails.vo";
import {SiteWecomEntranceVO} from "./SiteWecomEntrance.vo";

export class HomeAllConfigVO{
  @ApiProperty({ description: '站点详情' })
  siteDetails: SiteDetailsVO;

  @ApiProperty({ description: '企微入口支持表' })
  weComEntrance: SiteWecomEntranceVO;

  @ApiProperty({ description: '站点是否开通超级会员' })
  svipSite: boolean;
}