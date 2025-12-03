import { Module } from '@nestjs/common';
import { NavigationService } from './navigation.service';
import { NavigationController } from './navigation.controller';
import { NavigationConverter } from './navigation.converter';

@Module({
  controllers: [NavigationController],
  providers: [NavigationService, NavigationConverter],
  exports: [NavigationService, NavigationConverter],
})
export class NavigationModule {}
