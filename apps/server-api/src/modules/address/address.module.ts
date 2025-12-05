import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AddressService } from './address.service';
import { AddressController } from './address.controller';
import { UserModule } from '../user/user.module';
import { AddressConverter } from './address.converter';
import { Address } from './entities/address.entity';
import { MemberModule } from '../member/member.module';

@Module({
  imports: [TypeOrmModule.forFeature([Address]), MemberModule],
  controllers: [AddressController],
  providers: [AddressService, AddressConverter],
  exports: [AddressService],
})
export class AddressModule {}
