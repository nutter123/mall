import { Module } from '@nestjs/common';
import { TokenService } from './token.service';
import { TokenController } from './token.controller';
import {WechatModule} from "../wechat/wechat.module";
import {JwtModule} from "../jwt/jwt.module";
import { MemberModule } from '../member/member.module';

@Module({
  imports: [
      MemberModule,
      WechatModule,
      JwtModule
  ],
  controllers: [TokenController],
  providers: [TokenService],
})
export class TokenModule {}
