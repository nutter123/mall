import {Controller, Get, Post, Body, Patch, Param, Delete, Query} from '@nestjs/common';
import {ApiOperation, ApiQuery} from "@nestjs/swagger";
import {MallHeadersWithoutSiteId} from "../../common/decorators/mall-headers.decorator";
import {ApiResWrapper} from "../../common/decorators/api-res-wrapper.decorator";
import {CommonHeaders } from "../../common/decorators/common-headers.decorator";
import type {CommonHeadersDto} from "../../common/decorators/common-headers.decorator";
import {AddressGroupVO} from "./vo/AddressGroup.vo";
import { AddressService } from './address.service';

@Controller('address')
export class AddressController {
  constructor(private readonly addressService: AddressService) {}

  /**
   * 14. 地址列表状态分组
   */
  @Get('listStatusGroup')
  @ApiOperation({ summary: '14. 地址列表状态分组' })
  @MallHeadersWithoutSiteId() // 对应 @CommonHeadersWithoutSiteId

  // Query 参数文档化
  @ApiQuery({ name: 'siteId', description: '站点ID', type: String })
  @ApiQuery({ name: 'lat', description: '纬度', type: String })
  @ApiQuery({ name: 'lng', description: '经度', type: String })

  @ApiResWrapper(AddressGroupVO) // 自动包装 CommonRes<List<AddressGroupVO>>
  async listStatusGroup(
    // @Parameter(description = "站点id") @RequestParam String siteId
    @Query('siteId') siteId: string,
    // @Parameter(description = "纬度") @RequestParam String lat
    @Query('lat') lat: string,
    // @Parameter(description = "经度") @RequestParam String lng
    @Query('lng') lng: string,
    // 接收 Headers (虽然是 WithoutSiteId，但 CommonHeaders 涵盖了其他所有公共头)
    @CommonHeaders() headers: CommonHeadersDto,
  ): Promise<AddressGroupVO[]> {
    // Java 代码: List<AddressGroupVO> addressList = addressService.listStatusGroup(siteId, lat, lng);
    return this.addressService.listStatusGroup(siteId, lat, lng);
  }
}
