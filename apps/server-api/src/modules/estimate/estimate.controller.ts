import { Controller } from '@nestjs/common';
import { EstimateService } from './estimate.service';

@Controller()
export class EstimateController {
  constructor(private readonly estimateService: EstimateService) {}
}
