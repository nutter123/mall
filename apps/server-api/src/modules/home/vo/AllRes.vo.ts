import {ApiProperty} from "@nestjs/swagger";
import {AdvertisingVO} from "../../advertising/vo/Advertising.vo";
import {BackgroundVO} from "./Background.vo";
import {BottomNavigationVO} from "../../navigation/vo/BottomNavigation.vo";
import {CategoryNavigationVO} from "../../navigation/vo/CategoryNavigation.vo";
import {NavigationVO} from "../../navigation/vo/Navigation.vo";
import {HotNavigationVO} from "../../navigation/vo/HotNavigation.vo";
import {PayConfigVO} from "../../calc/vo/PayConfig.vo";
import {PictureAdsVO} from "../../advertising/vo/PictureAds.vo";
import {RecommendZoneVO} from "./RecommendZone.vo";
import {ShareVO} from "./Share.vo";
import {SiteDetailsVO} from "./SiteDetails.vo";

export class AllResVO{
  @ApiProperty({ description: "推荐专区顶部广告" })
  advertisingTop: AdvertisingVO[];

  @ApiProperty({ description: "首页轮播广告" })
  advertisingBanner: AdvertisingVO[];

  @ApiProperty({ description: "首页悬浮广告" })
  advertisingSuspended: AdvertisingVO[];

  @ApiProperty({ description: "背景图" })
  background: BackgroundVO;

  @ApiProperty({ description: "底部导航" })
  bottomNavigation: BottomNavigationVO[];

  @ApiProperty({ description: "类目导航" })
  categoryNavigation: CategoryNavigationVO[];

  @ApiProperty({ description: "酒神周期结束时间" })
  godEnd: string;

  @ApiProperty({ description: "酒神周期开始时间" })
  godStart: string;

  @ApiProperty({ description: "图文导航" })
  graphicNavigation: NavigationVO[];

  @ApiProperty({ description: "搜索框底部热词" })
  hotWordBottom: HotNavigationVO[];

  @ApiProperty({ description: "搜索框热词" })
  hotWordSearch: HotNavigationVO[];

  @ApiProperty({ description: "商城置灰" })
  mourningThemeOpen: boolean;

  @ApiProperty({ description: "支付设置" })
  payConfig: PayConfigVO;

  @ApiProperty({ description: "图片热区" })
  picture: PictureAdsVO;

  @ApiProperty({ description: "推荐专区" })
  recommendZone: RecommendZoneVO[];

  @ApiProperty({ description: "服务标准" })
  serviceStandards: NavigationVO[];

  @ApiProperty({ description: "分享Vo" })
  share: ShareVO;

  @ApiProperty({ description: "站点详情vo" })
  siteDetails: SiteDetailsVO;

  @ApiProperty({ description: "站点是否覆盖超级会员" })
  svipSite: boolean;
}