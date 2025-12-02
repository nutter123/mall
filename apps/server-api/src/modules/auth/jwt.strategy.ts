import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(configService: ConfigService) {
    super({
      // 从请求头 Authorization: Bearer <token> 获取
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      // 密钥，建议放 .env，这里演示先写死或读取配置
      secretOrKey: configService.get('JWT_SECRET') || 'mall_secret_key',
    });
  }

  // 验证通过后，Payload 会被挂载到 req.user 上
  async validate(payload: any) {
    return { userId: payload.sub, openid: payload.openid };
  }
}
