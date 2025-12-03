import { Module } from '@nestjs/common';
import { CalcService } from './calc.service';
import { CalcController } from './calc.controller';
import {UserModule} from "../user/user.module";

@Module({
  imports: [
    UserModule
  ],
  controllers: [CalcController],
  providers: [CalcService],
})
export class CalcModule {}
