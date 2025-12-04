import { Injectable } from '@nestjs/common';
import { plainToInstance } from 'class-transformer';
import {NavigationVO} from "./vo/Navigation.vo";
import {BottomNavigationVO} from "./vo/BottomNavigation.vo";
import {CategoryNavigationVO} from "./vo/CategoryNavigation.vo";
import {HotNavigationVO} from "./vo/HotNavigation.vo";
import { Navigation } from './entities/navigation.entity';
@Injectable()
export class NavigationConverter {
  toBottomNavigationVOList (navigations: Navigation[]): BottomNavigationVO[] {
    return navigations.map(navigation => {
      return plainToInstance(BottomNavigationVO, navigation);
    });
  }
  toNavigationVOList (navigations: Navigation[]): NavigationVO[] {
    return navigations.map(navigation => {
      return plainToInstance(NavigationVO, navigation);
    });
  }
  toCategoryNavigationVOList (navigations: Navigation[]): CategoryNavigationVO[] {
    return navigations.map(navigation => {
      return plainToInstance(CategoryNavigationVO, navigation);
    });
  }

  toHotNavigationVOList (navigations: Navigation[]): HotNavigationVO[] {
    return navigations.map(navigation => {
      return plainToInstance(HotNavigationVO, navigation);
    });
  }
}