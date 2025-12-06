import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

/**
 * 通用响应结果 (Common Response Wrapper)
 */
export class CommonRes<T> {
  // 响应状态 (Status Code - 业务状态，通常不是 HTTP Status)
  @ApiProperty({ description: '响应状态码 (业务状态)', example: 200 })
  status: number;

  // 响应消息
  @ApiProperty({ description: '响应消息', example: 'success' })
  message: string;

  // 响应提示
  @ApiProperty({ description: '响应提示 (用户友好)', example: '成功' })
  prompt: string;

  // 响应数据。使用 ApiPropertyOptional 以便能与 allOf 结合使用
  @ApiPropertyOptional({ description: '响应数据' })
  data: T;

  // 错误原因
  @ApiPropertyOptional({ description: '错误原因（可选）', example: null })
  error: string | null;

  // 错误跟踪
  @ApiPropertyOptional({ description: '错误跟踪信息（可选）', example: null })
  trace: string | null;

  // 错误方
  @ApiPropertyOptional({ description: '错误来源系统（可选）', example: 'NestJS-Mall' })
  system: string | null;

  /**
   * 静态方法：成功响应
   */
  static success<T>(data: T): CommonRes<T> {
    const response = new CommonRes<T>();
    response.status = 200;
    response.message = 'success';
    response.prompt = '成功';
    response.data = data;
    response.error = null;
    response.trace = null;
    response.system = null;
    return response;
  }
}
