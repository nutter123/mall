import { Module } from '@nestjs/common';
import { ComboService } from './combo.service';
import { ComboController } from './combo.controller';

import { TypeOrmModule } from '@nestjs/typeorm';
import { ComboPackage } from './entities/combo-package.entity';
import { ComboPackageItem } from './entities/combo-package-item.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ComboPackage, ComboPackageItem])],
  controllers: [ComboController],
  providers: [ComboService],
})
export class ComboModule {}
