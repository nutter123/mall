import { createParamDecorator, ExecutionContext } from '@nestjs/common';

export const CurrentUser = createParamDecorator((data: unknown, ctx: ExecutionContext) => {
  const request = ctx.switchToHttp().getRequest();
  // 之前 JwtStrategy validate 方法返回了 { userId, openid }，这里直接取
  return request.user;
});
