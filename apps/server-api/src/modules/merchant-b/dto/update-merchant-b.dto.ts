import { PartialType } from '@nestjs/swagger';
import { CreateMerchantBDto } from './create-merchant-b.dto';

export class UpdateMerchantBDto extends PartialType(CreateMerchantBDto) {}
