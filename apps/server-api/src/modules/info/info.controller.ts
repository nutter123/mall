import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
} from '@nestjs/common';
import { InfoService } from './info.service';
import { CreateInfoDto } from './dto/create-info.dto';
import { UpdateInfoDto } from './dto/update-info.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CommonHeaders } from '../../common/decorators/common-headers.decorator';
import { ApiCommonHeaders } from '../../common/decorators/api-common-headers.decorator';
import { CommonHeadersWithoutSiteId } from '../../common/decorators/common-headers-without-site-id.decorator';
import type { CommonHeadersDto } from '../../common/decorators/common-headers.decorator';
import type { CommonHeadersWithoutSiteIdDto } from '../../common/decorators/common-headers-without-site-id.decorator';
import { AllInfoVO } from '../user/vo/all-info.vo';
import { ApiResWrapper } from '../../common/decorators/api-res-wrapper.decorator';
import { UserService } from '../user/user.service';
import { User } from '../user/entities/user.entity';

@ApiTags('个人信息接口')
@Controller('info')
export class InfoController {
  constructor(
    private readonly infoService: InfoService,
    private readonly userService: UserService,
  ) {}

  @Get('/get')
  @ApiOperation({summary: '1. 获取个人信息'})
  @ApiCommonHeaders()
  @ApiResWrapper(User)
  async get(@CommonHeaders() headers: CommonHeadersDto): Promise<User> {
    return await this.userService.getUserInfo();
  }

  @Get('getAllInfo') // 对应 @GetMapping("/getAllInfo")
  @ApiOperation({summary: '13. 用户中心所需数据'})
  @ApiCommonHeaders() // 对应 @CommonHeaders
  @ApiResWrapper(AllInfoVO)
  async getAllInfo(
    // 对应 @RequestParam Integer siteId 和 @Parameter(description = "站点ID")
    @Query('siteId') siteId: number,
    // 可以继续获取 Headers
    @CommonHeadersWithoutSiteId() headers: CommonHeadersWithoutSiteIdDto,
  ): Promise<AllInfoVO> {
    // Java 代码: return CommonRes.success(userService.getAllInfo(siteId));
    // NestJS: Service 返回 AllInfoVO 对象
    return await this.userService.getAllInfo(siteId);
  }
}
