import { Module } from '@nestjs/common';
import { WechatService } from './wechat.service';
import { WechatController } from './wechat.controller';
import { HttpModule } from '@nestjs/axios';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Wechat } from './entities/wechat.entity';

@Module({
  imports: [
    HttpModule.register({
      timeout: 5000,
      maxRedirects: 5,
    }),
    TypeOrmModule.forFeature([Wechat]),
  ],
  controllers: [WechatController],
  providers: [WechatService],
  exports: [WechatService],
})
export class WechatModule {}
