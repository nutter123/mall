import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, IsOptional } from 'class-validator';

/**
 * GetByWechatMpReqVO: 微信小程序获取 token 请求参数
 */
export class GetByWechatMpReqVO {

    @ApiProperty({ description: '应用ID', example: 'wx1234567890', required: true })
    @IsString()
    @IsNotEmpty({ message: 'appId不能为空' })
    appid: string;

    @ApiProperty({ description: '微信登录代码', example: '0310kH000b2w6c1A0j1w0gY00h20kH01', required: true })
    @IsString()
    @IsNotEmpty({ message: 'jsCode不能为空' })
    jsCode: string;

    @ApiProperty({ description: '点击ID', example: 'click_xyz', required: false })
    @IsString()
    @IsOptional()
    clickId?: string;
}
