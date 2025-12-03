import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { WechatService } from './wechat.service';
import { CreateWechatDto } from './dto/create-wechat.dto';
import { UpdateWechatDto } from './dto/update-wechat.dto';

@Controller('wechat')
export class WechatController {
  constructor(private readonly wechatService: WechatService) {}

}
