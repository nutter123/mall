import { HttpException, HttpStatus } from '@nestjs/common';

/**
 * 业务异常类
 * 所有业务错误都应抛出此类，它总是返回 HTTP 400 Bad Request，
 * 但包含具体的业务代码 (bizCode) 和提示信息 (prompt)。
 */
export class BusinessException extends HttpException {
  // 业务状态码，例如 1001 (用户不存在), 1002 (参数缺失)
  public readonly errorCode: string;
  public readonly userPrompt: string;

  /**
   * @param errorCode 业务错误码 (例如: 'E4001')
   * @param userPrompt 用户友好的提示
   * @param detailedMessage 详细的内部错误消息 (可选)
   */
  constructor(errorCode: string, userPrompt: string, detailedMessage?: string) {
    // HttpException 的第一个参数是响应体。这里我们包装所有需要传递给 Filter 的数据。
    super(
      {
        // 传递给过滤器的自定义数据
        errorCode: errorCode,
        userPrompt: userPrompt,
        detailedMessage: detailedMessage || '业务处理失败',
      },
      // 所有业务错误统一返回 HTTP 400 Bad Request
      HttpStatus.BAD_REQUEST,
    );

    this.errorCode = errorCode;
    this.userPrompt = userPrompt;
  }
}