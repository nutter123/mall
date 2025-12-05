import {Controller, Get, Post, Body, Patch, Param, Delete, Query, ParseIntPipe} from '@nestjs/common';
import {ApiOperation, ApiQuery, ApiTags} from "@nestjs/swagger";
import {MallHeadersWithoutSiteId} from "../../common/decorators/mall-headers.decorator";
import {ApiResWrapper} from "../../common/decorators/api-res-wrapper.decorator";
import {CommonHeaders } from "../../common/decorators/common-headers.decorator";
import type {CommonHeadersDto} from "../../common/decorators/common-headers.decorator";
import {MallHeaders} from "../../common/decorators/mall-headers.decorator";

import {AdvertisingService} from "./advertising.service";
import {GetListResVO} from "./vo/GetListRes.vo";

@ApiTags('广告接口')
@Controller('advertising')
export class AdvertisingController {
  constructor(private readonly advertisingService: AdvertisingService) {}

  /**
   * 1. 获取广告数组
   */
  @Get('getList')
  @ApiOperation({ summary: '1. 获取广告数组' })
  @MallHeaders() // 对应 @CommonHeaders

  // Query 参数文档化
  @ApiQuery({ name: 'position', description: '位置', type: String })
  @ApiQuery({ name: 'siteId', description: '站点', type: Number })

  // 自动包装 CommonRes<List<GetListResVO>>
  @ApiResWrapper(GetListResVO)
  getList(
    // @Parameter(description = "位置") @RequestParam String position
    @Query('position') position: string,
    // @Parameter(description = "站点") @RequestParam Integer siteId -> ParseIntPipe 确保是 number
    @Query('siteId', ParseIntPipe) siteId: number,
    @CommonHeaders() headers: CommonHeadersDto,
  ): GetListResVO[] {

    // 对应 Java 的 GetListResVO.builder()...build(); 和 List.of()
    // 在 NestJS/TS 中，我们直接创建对象字面量数组
    const getListResVO: GetListResVO = {
      id: "1273127382863167723", // 保持为字符串以避免 BigInt 转换问题
      linkType: "group_buy_jxe",
      linkValue: "group_buy_jxe",
      name: "团购1111",
      pic: "https://outside-test-a-static.v2.jiuxiao2.cn/outside/fms/img/a51da5d276f0439d8204ddb93fdec450.png",
      position: "home_popup",
      sort: 31,
      tag: true,
    } as GetListResVO;

    // 拦截器会自动包装 CommonRes.success([getListResVO])
    return [getListResVO];
  }
}
