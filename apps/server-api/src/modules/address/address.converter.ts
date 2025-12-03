import { Injectable } from '@nestjs/common';
import { AddressDetailVO } from './vo/AddressDetail.vo';
import { plainToInstance } from 'class-transformer';
import {AddressVO} from "./vo/Address.vo";

@Injectable()
export class AddressConverter {
  toAddressDetailVO(entity: Address): AddressDetailVO {
    return plainToInstance(AddressDetailVO, entity);
  }

  // entity 转 vo
  toAddressVO(entity: Address): AddressVO {
    return plainToInstance(AddressVO, entity);
  }
}
