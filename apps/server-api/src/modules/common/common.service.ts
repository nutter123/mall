import { Inject, Injectable, Logger, Scope } from '@nestjs/common';
import { CreateCommonDto } from './dto/create-common.dto';
import { UpdateCommonDto } from './dto/update-common.dto';
import { REQUEST } from '@nestjs/core';
import { CommonHeadersDto } from '../../common/decorators/common-headers.decorator';
import { GetStopResVO } from './vo/GetStopRes.vo';

@Injectable({ scope: Scope.REQUEST })
export class CommonService {
  private readonly logger = new Logger(CommonService.name);

  constructor(
    // @Inject(REQUEST) 是获取原始 Request 对象（Express Request）的标准 NestJS 方式
    @Inject(REQUEST) private readonly request: any,
  ) {}

  create(createCommonDto: CreateCommonDto) {
    return 'This action adds a new common';
  }

  findAll() {
    return `This action returns all common`;
  }

  findOne(id: number) {
    return `This action returns a #${id} common`;
  }

  update(id: number, updateCommonDto: UpdateCommonDto) {
    return `This action updates a #${id} common`;
  }

  remove(id: number) {
    return `This action removes a #${id} common`;
  }

  /**
   * 获取停业配置
   */
  async getStop(headers: CommonHeadersDto): Promise<GetStopResVO> {
    const getStopResVO = {
      edition: 'mall_mp_wx',
      stop: false,
      linkValue: '',
      mourningThemeOpen: false,
      unionId: 'oQp4Z0-ARA5Tu-d-6eBm_2M2iIjI',
      openId: 'oSegQ5cMZlIiQjt1qIENCUJiUWA',
      bindTime: '2025-12-03 16:00:15',
    };
    return getStopResVO;
  }

  // --- 工具方法 ---

  /**
   * 判断是否为微信小程序
   */
  private isMiniProgram(userAgent: string | undefined, request: any): boolean {
    const referer = request.headers['referer']; // Express/NestJS headers key 是小写
    if (referer && referer.includes('https://servicewechat.com')) {
      return true;
    }

    const clientType = request.headers['client-type'];
    if ('miniprogram'.toLowerCase() === clientType?.toLowerCase()) {
      return true;
    }

    return false;
  }

  /**
   * 判断是否为APP
   */
  private isApp(clientType: string | undefined, appVersion: string | undefined): boolean {
    // 在 NestJS 中，clientType 和 appVersion 来自 Headers，通过 @CommonHeaders 传入
    if ('app'.toLowerCase() === clientType?.toLowerCase() || appVersion) {
      return true;
    }

    return false;
  }
}
