import { Module } from '@nestjs/common';
import { NavigationService } from './navigation.service';
import { NavigationController } from './navigation.controller';
import { NavigationConverter } from './navigation.converter';

import { TypeOrmModule } from '@nestjs/typeorm';
import { Navigation } from './entities/navigation.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Navigation])],
  controllers: [NavigationController],
  providers: [NavigationService, NavigationConverter],
  exports: [NavigationService, NavigationConverter],
})
export class NavigationModule {}
