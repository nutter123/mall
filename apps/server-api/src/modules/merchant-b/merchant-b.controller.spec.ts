import { Test, TestingModule } from '@nestjs/testing';
import { MerchantBController } from './merchant-b.controller';
import { MerchantBService } from './merchant-b.service';

describe('MerchantBController', () => {
  let controller: MerchantBController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MerchantBController],
      providers: [MerchantBService],
    }).compile();

    controller = module.get<MerchantBController>(MerchantBController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
