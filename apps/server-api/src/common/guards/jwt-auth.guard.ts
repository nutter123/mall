import { Injectable, ExecutionContext, UnauthorizedException } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { Reflector } from '@nestjs/core';

@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt') {
  constructor(private reflector: Reflector) {
    super();
  }

  canActivate(context: ExecutionContext) {
    // 允许通过 @Public() 装饰器跳过鉴权的接口
    const isPublic = this.reflector.getAllAndOverride<boolean>('isPublic', [context.getHandler(), context.getClass()]);
    if (isPublic) {
      return true;
    }
    return super.canActivate(context);
  }

  handleRequest(err: any, user: any, info: any) {
    // err: 系统错误
    // user: Strategy.validate 返回的用户对象
    // info: 具体的错误信息 (如 "jwt expired", "No auth token")

    if (err || !user) {
      // 你可以在这里根据 info.message 抛出更具体的错误
      throw err || new UnauthorizedException('登录已过期或未授权 (jxe-token 无效)');
    }
    return user;
  }
}
