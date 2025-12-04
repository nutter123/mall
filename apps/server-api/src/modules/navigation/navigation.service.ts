import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Navigation } from './entities/navigation.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class NavigationService {
  constructor(
    @InjectRepository(Navigation)
    private readonly navigationRepo: Repository<Navigation>
  ) {}
  async getListByType(type: string): Promise<Navigation[]> {
    const navigationList: Navigation[] = await this.navigationRepo.find({
      where: { type },
    });
    return navigationList;
  }
}