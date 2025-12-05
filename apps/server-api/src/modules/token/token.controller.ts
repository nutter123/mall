import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { TokenService } from './token.service';
import { CreateTokenDto } from './dto/create-token.dto';
import { UpdateTokenDto } from './dto/update-token.dto';
import { ApiBody, ApiOperation, ApiTags } from '@nestjs/swagger';
import { ApiResWrapper } from '../../common/decorators/api-res-wrapper.decorator';
import { MallHeaders } from '../../common/decorators/mall-headers.decorator';
import { TokenVO } from './vo/token.vo';
import { GetByWechatMpReqVO } from './vo/GetByWechatMpReq.vo';

@ApiTags('Token管理')
@Controller('token')
export class TokenController {
  constructor(private readonly tokenService: TokenService) {}

  @Get('getWechatMpBaseInfo')
  @ApiOperation({
    summary: '获取微信小程序基础信息',
    description: '返回基础的欢迎信息',
  })
  @ApiResWrapper(String)
  getWechatMpBaseInfo(): string {
    return 'Hello, World! My first backend API is working!';
  }

  @Post('getByWechatMp')
  @ApiOperation({
    summary: '通过微信小程序获取Token',
    description: '根据微信小程序参数获取用户Token',
  })
  @MallHeaders()
  @ApiResWrapper(TokenVO)
  @ApiBody({type: GetByWechatMpReqVO, description: '微信小程序请求参数'})
  async getByWechatMp(@Body() reqVO: GetByWechatMpReqVO): Promise<TokenVO> {
    return await this.tokenService.getTokenByWechatMp(reqVO);
  }

  @Post('bindByWechatMpDecode')
  @ApiOperation({
    summary: '通过微信小程序解码绑定',
    description: '处理微信小程序解码绑定逻辑',
  })
  @MallHeaders()
  @ApiResWrapper(String)
  async bindByWechatMpDecode(): Promise<string> {
    return await this.tokenService.getTokenByWechatMpDecode();
  }
}
