import { Controller, Get, Query } from '@nestjs/common';
import { SiteService } from './site.service';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { Public } from '@/common/decorators/public.decorator';
import { ApiResWrapper } from '@/common/decorators/api-res-wrapper.decorator';
import { GetSiteByLocationReqVO } from './vo/GetSiteByLocationReq.vo';
import { SiteVO } from './vo/Site.vo';
@ApiTags('站点')
@Controller('site')
export class SiteController {
  constructor(private readonly siteService: SiteService) {}

  /**
   * 根据经纬度获取站点信息
   */
  @Get('getByLngLat')
  @ApiOperation({ summary: '根据经纬度获取站点信息' })
  @Public()
  @ApiResWrapper(SiteVO)
  async getSiteByLocation(@Query() query: GetSiteByLocationReqVO): Promise<SiteVO> {
    return this.siteService.getSiteByLocation(query);
  }
}
