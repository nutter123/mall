import { Injectable } from '@nestjs/common';
import { CreateTokenDto } from './dto/create-token.dto';
import { UpdateTokenDto } from './dto/update-token.dto';
import { TokenVO } from './vo/token.vo';
import { GetByWechatMpReqVO } from './vo/GetByWechatMpReq.vo';
import { WechatService } from '../wechat/wechat.service';
import { JwtService } from '../jwt/jwt.service';
import { Util } from '../../common/utils/util';
import { CreateJwtDto } from '../jwt/dto/create-jwt.dto';
import { MemberService } from '../member/member.service';

@Injectable()
export class TokenService {
  constructor(
    private readonly wechatService: WechatService,
    private readonly memberService: MemberService,
    private readonly jwtService: JwtService,
  ) {}

  create(createTokenDto: CreateTokenDto) {
    return 'This action adds a new token';
  }

  findAll() {
    return `This action returns all token`;
  }

  findOne(id: number) {
    return `This action returns a #${id} token`;
  }

  update(id: number, updateTokenDto: UpdateTokenDto) {
    return `This action updates a #${id} token`;
  }

  remove(id: number) {
    return `This action removes a #${id} token`;
  }

  async getTokenByWechatMp(reqVO: GetByWechatMpReqVO): Promise<TokenVO> {
    // 团购拦截mock
    if (reqVO.appid == 'wxf03346d0dd7078a4') {
      /**
       *  unionId: 'oQp4Z0-ARA5Tu-d-6eBm_2M2iIjI',
       *           openId: 'oH_V35bspsSnHNivyk2tF_ip5LOk',
       *           token:
       *             'eyJhbGciOiJIUzUxMiJ9.eyJlZGl0aW9uIjoibWFsbF9tcF93eCIsInVzZXJJZCI6MTMzMjcyMjgyODczNzMyMzAxNCwib3JkZXJDb3VudCI6MSwiYnkiOiIxMzMyNzIyODI4NzM3MzIzMDE0IiwibmFtZSI6IjEzMCoqKio2NTAxIiwidHlwZSI6Ik1BTEwiLCJleHAiOjE3NjkxNjEzNjB9.UaP8DQxKdqGwmQNxtwf7YXmhjp6_HIy0_B3B74EXHYakVEHfTJS2nJgrto1R5bxP4nJVAzDtcVdnuM1Sh7y3Cw',
       *           haveAuthorization: true,
       *           secondPhoneVo: null,
       */
      const tokenVO = new TokenVO();
      tokenVO.token =
        'eyJhbGciOiJIUzUxMiJ9.eyJlZGl0aW9uIjoibWFsbF9tcF93eCIsInVzZXJJZCI6MTMzMjcyMjgyODczNzMyMzAxNCwib3JkZXJDb3VudCI6MSwiYnkiOiIxMzMyNzIyODI4NzM3MzIzMDE0IiwibmFtZSI6IjEzMCoqKio2NTAxIiwidHlwZSI6Ik1BTEwiLCJleHAiOjE3NjkxNjEzNjB9.UaP8DQxKdqGwmQNxtwf7YXmhjp6_HIy0_B3B74EXHYakVEHfTJS2nJgrto1R5bxP4nJVAzDtcVdnuM1Sh7y3Cw';
      tokenVO.haveAuthorization = true;
      tokenVO.openId = 'oH_V35bspsSnHNivyk2tF_ip5LOk';
      tokenVO.unionId = 'oQp4Z0-ARA5Tu-d-6eBm_2M2iIjI';
      // tokenVO.secondPhoneVo = null;
      return tokenVO;
    }
    // 1. 微信登录 (转换为 await)
    const openid: string = await this.wechatService.wxLogin(reqVO);

    // 2. 查询用户
    let user = await this.memberService.getUserByOpenid(openid);

    if (user === null) {
      // 3. 用户不存在，生成手机号并注册
      const phone: string = Util.generatePhone();
      user = await this.memberService.register(phone, openid);

      // 备注: 如果需要抛出异常（例如手机号已存在），应在此处抛出 BusinessException
    }

    // 4. 生成 token
    const jwtDto: CreateJwtDto = {
      userId: user.id.toString(),
    };
    const token: string = await this.jwtService.generateToken(jwtDto);

    // 5. 构建 TokenVO
    const tokenVO = new TokenVO();
    tokenVO.token = token;

    // 拦截器会自动包装 CommonRes.success(tokenVO)
    return tokenVO;
  }

  async getTokenByWechatMpDecode(): Promise<string> {
    // 1. 通过微信解码获取手机号 (这里简化，实际需要 reqVO.jsCode 或其他参数)
    // 假设这里需要一个 reqVO 参数，为了匹配 Java 原始代码，这里暂时跳过 reqVO.
    // const phone = await this.wechatService.getUserPhoneNumber(reqVO);
    const phone: string = Util.generatePhone(); // 模拟数据

    // 2. 通过微信获取 openid (这里简化，实际需要 reqVO)
    // const openid = await this.wechatService.getUserOpenid(reqVO);
    const openid: string = '111'; // 模拟数据

    // 3. 查询用户
    let user = await this.memberService.getUserByPhone(phone);

    if (user === null) {
      // 4. 用户不存在，注册用户
      user = await this.memberService.register(phone, openid);
    }

    // 5. 生成 token
    const jwtDto: CreateJwtDto = {
      userId: user.id.toString(),
    };
    return this.jwtService.generateToken(jwtDto);
  }
}
