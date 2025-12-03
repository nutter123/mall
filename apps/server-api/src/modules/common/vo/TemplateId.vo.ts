import {ApiProperty} from "@nestjs/swagger";

export class TemplateIdVO {
  @ApiProperty({ description: '模板类型', example: 1 })
  openType: number;
  @ApiProperty({ description: '模板ID', example: 'template_id_xyz' })
  templateId: string;
}