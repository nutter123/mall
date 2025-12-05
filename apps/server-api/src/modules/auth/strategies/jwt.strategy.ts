import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { ConfigService } from '@nestjs/config';
import { UserService } from '../../user/user.service';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy, 'jwt') {
  constructor(
    private configService: ConfigService,
    private userService: UserService,
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: configService.get<string>('JWT_SECRET') || 'default_secret',
      ignoreExpiration: false,
    });
  }

  async validate(payload: any) {
    // 在这里可以根据payload中的信息验证用户是否存在
    // 如果用户不存在，可以抛出UnauthorizedException
    // 如果用户存在，返回的对象会被挂载到request.user上
    return {
      id: payload.sub,
      ...payload,
    };
  }
}