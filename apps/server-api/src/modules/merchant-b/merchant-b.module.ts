import { Module } from '@nestjs/common';
import { MerchantBService } from './merchant-b.service';
import { MerchantBController } from './merchant-b.controller';

@Module({
  controllers: [MerchantBController],
  providers: [MerchantBService],
})
export class MerchantBModule {}
