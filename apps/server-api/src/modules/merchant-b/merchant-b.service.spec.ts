import { Test, TestingModule } from '@nestjs/testing';
import { MerchantBService } from './merchant-b.service';

describe('MerchantBService', () => {
  let service: MerchantBService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MerchantBService],
    }).compile();

    service = module.get<MerchantBService>(MerchantBService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
