import { ApiProperty } from '@nestjs/swagger';

export class UserCouponInfoVO {
  haveExchange: boolean;
  totalAmount: number;
}