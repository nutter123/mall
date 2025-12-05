import { Injectable } from '@nestjs/common';
import { GetSiteByLocationReqVO } from './vo/GetSiteByLocationReq.vo';
import { SiteVO } from './vo/Site.vo';

@Injectable()
export class SiteService {
  /**
   * 根据经纬度获取站点信息
   */
  async getSiteByLocation(query: GetSiteByLocationReqVO): Promise<SiteVO> {
    return {
      id: '25',
      siteName: '南宁',
      openStatus: true,
      openStatusNew: 1,
      expectedOpenTime: '2022-06-22',
      version: 2,
      city: null,
      firstPinYin: null,
      pinYin: null,
      isBusiness: null,
      isTransfer: null,
      areas: true,
      shopId: '140',
    };
  }
}
