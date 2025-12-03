import { Injectable } from '@nestjs/common';
import { CreateMerchantBDto } from './dto/create-merchant-b.dto';
import { UpdateMerchantBDto } from './dto/update-merchant-b.dto';

@Injectable()
export class MerchantBService {
  create(createMerchantBDto: CreateMerchantBDto) {
    return 'This action adds a new merchantB';
  }

  findAll() {
    return `This action returns all merchantB`;
  }

  findOne(id: number) {
    return `This action returns a #${id} merchantB`;
  }

  update(id: number, updateMerchantBDto: UpdateMerchantBDto) {
    return `This action updates a #${id} merchantB`;
  }

  remove(id: number) {
    return `This action removes a #${id} merchantB`;
  }
}
