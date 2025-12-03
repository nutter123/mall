import {ApiProperty} from "@nestjs/swagger";
import {IsOptional} from "class-validator";
import {TemplateIdVO} from "./TemplateId.vo";

export class SubscribeMessageReqVO {
  @ApiProperty({ description: '订阅类型', example: 1, required: false })
  @IsOptional()
  pickType?: number;
  @ApiProperty({ description: '模板ID列表', example: [{ id: 'tpl_id_1', name: '模板1' }], required: false })
  @IsOptional()
  templateIds?: TemplateIdVO[];
}