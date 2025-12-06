import { HttpException, HttpStatus } from '@nestjs/common';
import { CommonRes } from '../dto/common-res.dto';
import { BusinessErrorCode } from '../enums/business-error.code';

/**
 * 业务异常类
 * 用于在 Service 层主动抛出可控的业务错误
 */

export class BusinessException extends HttpException {
  private errorCode: number;

  constructor(
    message: string,
    code: BusinessErrorCode = BusinessErrorCode.COMMON_ERROR,
    httpStatus: HttpStatus = HttpStatus.OK,
  ) {
    super(message, httpStatus);
    this.errorCode = code;
  }

  getErrorCode(): number {
    return this.errorCode;
  }
}
