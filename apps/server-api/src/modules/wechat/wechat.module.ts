import { Module } from '@nestjs/common';
import { WechatService } from './wechat.service';
import { WechatController } from './wechat.controller';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [
    HttpModule.register({
      timeout: 5000,
      maxRedirects: 5,
    }),
  ],
  controllers: [WechatController],
  providers: [WechatService],
  exports: [WechatService],
})
export class WechatModule {}
