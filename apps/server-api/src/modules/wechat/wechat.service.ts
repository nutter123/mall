import {
  Injectable,
  InternalServerErrorException,
  Logger,
} from '@nestjs/common';
import { CreateWechatDto } from './dto/create-wechat.dto';
import { UpdateWechatDto } from './dto/update-wechat.dto';
import { ConfigService } from '@nestjs/config';
import { GetByWechatMpReqVO } from '../token/vo/GetByWechatMpReq.vo';
import { BusinessException } from '../../common/exceptions/business.exception';
import { HttpService } from '@nestjs/axios';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class WechatService {
  private readonly logger = new Logger(WechatService.name);

  // 通过构造函数注入 ConfigService 和 HttpService
  constructor(
    private readonly httpService: HttpService,
    private readonly configService: ConfigService,
  ) {}

  create(createWechatDto: CreateWechatDto) {
    return 'This action adds a new wechat';
  }

  findAll() {
    return `This action returns all wechat`;
  }

  findOne(id: number) {
    return `This action returns a #${id} wechat`;
  }

  update(id: number, updateWechatDto: UpdateWechatDto) {
    return `This action updates a #${id} wechat`;
  }

  remove(id: number) {
    return `This action removes a #${id} wechat`;
  }

  /**
   * 模拟 Java WechatProperties 的 getAppSecret 方法
   */
  private getAppSecret(appId: string): string {
    // 实际项目中应根据 appId 查找对应的 Secret，这里简化为从配置中读取
    const secret =
      this.configService.get<string>(
        `WECHAT_APP_SECRET_${appId.toUpperCase()}`,
      ) || this.configService.get<string>('WECHAT_DEFAULT_APP_SECRET');
    if (!secret) {
      this.logger.error(`AppSecret not found for appId: ${appId}`);
      throw new InternalServerErrorException(
        `Configuration error: AppSecret for ${appId} is missing.`,
      );
    }
    return secret;
  }

  /**
   * 微信登录，获取 openid 和 session_key
   * 对应 Java 方法: wxLogin(GetByWechatMpReqVO reqVO)
   */
  async wxLogin(reqVO: GetByWechatMpReqVO): Promise<string> {
    const appSecret = this.getAppSecret(reqVO.appid);
    const url = this.configService.get<string>('WECHAT_JSCODE2SESSION_URL');
    if (!url) {
      throw new BusinessException(
        'E5000',
        '路由 WECHAT_JSCODE2SESSION_URL 未配置，请检查配置文件。',
      );
    }

    try {
      const response$ = this.httpService.get(url, {
        params: {
          appid: reqVO.appid,
          secret: appSecret,
          js_code: reqVO.jsCode,
          grant_type: 'authorization_code',
        },
      });
      const response = await firstValueFrom(response$) as { data: any };

      const data = response.data;
      this.logger.log(`获取 session_key 成功: ${JSON.stringify(data)}`);

      if (data.errcode) {
        this.logger.error(`微信认证失败: ${data.errmsg}`);
        // 抛出 BusinessException
        throw new BusinessException(
          'E4001',
          '微信登录凭证无效', // 用户友好的提示
          `微信 API 错误: ${data.errmsg}`,
        );
      }
      return data.openid; // 返回包含 openid 和 session_key 的对象
    } catch (error: any) {
      // 捕获 HTTP 错误或业务错误
      this.logger.error(`获取 session_key 失败: ${error.message}`, error.stack);

      if (error instanceof BusinessException) {
        throw error;
      }
      throw new BusinessException(
        'E4001',
        '获取 session_key 失败: 内部错误或网络异常',
      );
    }
  }

  /**
   * 根据 code 获取用户手机号
   * 对应 Java 方法: getUserPhoneNumber(GetByWechatMpReqVO reqVO)
   */
  async getUserPhoneNumber(reqVO: GetByWechatMpReqVO): Promise<string> {
    try {
      // 获取 access_token
      const accessToken = await this.getAccessToken(reqVO.appid);

      // 构建请求参数
      const paramMap = {
        code: reqVO.jsCode,
      };

      // 发送请求获取手机号
      const url =
        this.configService.get<string>('WECHAT_PHONE_NUMBER_URL') +
        `?access_token=${accessToken}`;

      const { data } = await firstValueFrom(
        this.httpService.post(url, paramMap),
      ) as { data: any };

      // 解析返回结果
      if (data.errcode === 0) {
        const phoneInfo = data.phone_info;
        this.logger.log(`获取手机号成功: ${data.phone_info.purePhoneNumber}`);
        return phoneInfo.purePhoneNumber;
      } else {
        this.logger.error(`获取手机号失败: ${JSON.stringify(data)}`);
        throw new BusinessException('E4001', `获取手机号失败: ${data.errmsg}`);
      }
    } catch (error: any) {
      this.logger.error(`获取手机号异常: ${error.message}`, error.stack);
      if (error instanceof BusinessException) {
        throw error;
      }
      throw new BusinessException(
        'E4001',
        '获取手机号异常: 内部错误或网络异常',
      );
    }
  }

  /**
   * 获取微信 access_token
   * 对应 Java 方法: private String getAccessToken(String appId)
   */
  private async getAccessToken(appId: string): Promise<string> {
    const appSecret = this.getAppSecret(appId);
    const url = this.configService.get<string>('WECHAT_ACCESS_TOKEN_URL');

    if (!url) {
      throw new BusinessException(
          'E5000',
          '路由 WECHAT_JSCODE2SESSION_URL 未配置，请检查配置文件。',
      );
    }

    try {
      const finalUrl = `${url}?grant_type=client_credential&appid=${appId}&secret=${appSecret}`;

      const { data } = await firstValueFrom(this.httpService.get(finalUrl)) as { data: any };

      if (data.access_token) {
        return data.access_token;
      } else {
        this.logger.error(`获取 access_token 失败: ${JSON.stringify(data)}`);
        throw new BusinessException(
          'E4001',
          `获取 access_token 失败: ${data.errmsg || '未知错误'}`,
        );
      }
    } catch (error: any) {
      this.logger.error(
        `获取 access_token 异常: ${error.message}`,
        error.stack,
      );
      if (error instanceof BusinessException) {
        throw error;
      }
      throw new BusinessException(
        'E4001',
        `获取 access_token 异常: ${error.message}`,
      );
    }
  }
}
