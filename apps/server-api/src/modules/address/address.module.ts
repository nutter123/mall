import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AddressService } from './address.service';
import { AddressController } from './address.controller';
import { UserModule } from '../user/user.module';
import { AddressConverter } from './address.converter';
import { Address } from './entities/address.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Address]), UserModule],
  controllers: [AddressController],
  providers: [AddressService, AddressConverter],
  exports: [AddressService],
})
export class AddressModule {}
