import { Module } from '@nestjs/common';
import { TokenService } from './token.service';
import { TokenController } from './token.controller';
import {UserModule} from "../user/user.module";
import {WechatModule} from "../wechat/wechat.module";
import {JwtModule} from "../jwt/jwt.module";

@Module({
  imports: [
      UserModule,
      WechatModule,
      JwtModule
  ],
  controllers: [TokenController],
  providers: [TokenService],
})
export class TokenModule {}
