import {Controller, Get, Post, Body, Patch, Param, Delete, Query, ParseIntPipe} from '@nestjs/common';
import {ApiBody, ApiOperation, ApiQuery, ApiTags} from "@nestjs/swagger";
import {MallHeadersWithoutSiteId} from "../../common/decorators/mall-headers.decorator";
import {ApiResWrapper} from "../../common/decorators/api-res-wrapper.decorator";
import {CommonHeaders } from "../../common/decorators/common-headers.decorator";
import type {CommonHeadersDto} from "../../common/decorators/common-headers.decorator";
import {MallHeaders} from "../../common/decorators/mall-headers.decorator";
import {CalcService} from "./calc.service";
import {CalcBuyVO} from "./vo/CalcBuy.vo";
import {BuyCalcDTO} from "./vo/BuyCalc.dto";

@Controller()
export class CalcController {
  constructor(private readonly calcService: CalcService) {}

  @Post('buyCalc')
  @ApiOperation({ summary: '1. 立即购买结算' })
  @MallHeaders() // 对应 @CommonHeaders
  @ApiResWrapper(CalcBuyVO)
  @ApiBody({ type: BuyCalcDTO, description: '购买计算 DTO' })
  async buyCalc(
    // Java: @RequestBody BuyCalcDTO buyCalcDTO -> NestJS: @Body() buyCalcDTO: BuyCalcDTO
    @Body() buyCalcDTO: BuyCalcDTO,
    @CommonHeaders() headers: CommonHeadersDto,
  ): Promise<CalcBuyVO> {
    return this.calcService.buyCalc(buyCalcDTO);
  }
}
