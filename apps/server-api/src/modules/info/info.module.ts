import { Module } from '@nestjs/common';
import { InfoService } from './info.service';
import { InfoController } from './info.controller';
import {UserModule} from "../user/user.module";

@Module({
  imports: [UserModule],
  controllers: [InfoController],
  providers: [InfoService],
})
export class InfoModule {}
