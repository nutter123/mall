import { Controller, Get } from '@nestjs/common';
import { VipService } from './vip.service';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { ApiCommonHeaders } from '../../common/decorators/api-common-headers.decorator';
import { ApiResWrapper } from '../../common/decorators/api-res-wrapper.decorator';
import type { CommonHeadersDto } from '../../common/decorators/common-headers.decorator';
import { CommonHeaders } from '../../common/decorators/common-headers.decorator';
import { VipDayPopupResVO } from './vo/VipDayPopupRes.vo';
import { VipVO } from './vo/Vip.vo';
import { LevelRelationVO } from './vo/LevelRelation.vo';

@ApiTags('会员接口') // 对应 @Tag(name = "会员接口")
@Controller('vip')
export class VipController {
  constructor(private readonly vipService: VipService) {}

  /**
   * 20.会员日弹屏
   */
  @Get('vipDayPopup')
  @ApiOperation({ summary: '20.会员日弹屏' })
  @ApiCommonHeaders() // 对应 @CommonHeaders
  @ApiResWrapper(VipDayPopupResVO) // 自动包装 CommonRes<VipDayPopupResVO>
  vipDayPopup(@CommonHeaders() headers: CommonHeadersDto): VipDayPopupResVO {
    // 对应 Java 的 VipDayPopupResVO.builder()...build();
    // 在 NestJS 中，我们直接创建对象字面量或实例化 DTO
    const vipDayPopupResVO = {
      goodsName: '白沙井白沙啤酒9.1°P罐装500ml 4罐',
      goodsPic:
        'https://outside-test-a-static.v2.jiuxiao2.cn/outside/fms/img/356ce7154d644cb2a1148fca86c8bd11.jpg',
      time: '每周周三',
      times: 2,
      today: true,
      type: 'SVIP超级会员日',
    } as VipDayPopupResVO; // 断言为 VO 类型

    // 拦截器会自动包装 CommonRes.success(vipDayPopupResVO)
    return vipDayPopupResVO;
  }

  /**
   * 1. 获取用户会员信息
   */
  @Get('getUserVipInfo')
  @ApiOperation({ summary: '1. 获取用户会员信息' })
  @ApiCommonHeaders()
  @ApiResWrapper(VipVO) // 自动包装 CommonRes<UserVipInfo>
  async getUserVipInfo(
    @CommonHeaders() headers: CommonHeadersDto,
  ): Promise<VipVO> {
    // Java 代码: userVipInfoService.getUserVipInfo();
    return this.vipService.getUserVipInfo();
  }

  /**
   * 16.查询等级奖励
   */
  @Get('getLevelRelation')
  @ApiOperation({ summary: '16.查询等级奖励' })
  @ApiCommonHeaders()
  @ApiResWrapper(LevelRelationVO) // 自动包装 CommonRes<LevelRelationVO>
  getLevelRelation(
    @CommonHeaders() headers: CommonHeadersDto,
  ): LevelRelationVO {
    // Java 代码: new LevelRelationVO();
    // 拦截器会自动包装 CommonRes.success(levelRelationVO)
    return new LevelRelationVO();
  }
}
