import { Controller } from '@nestjs/common';
import { RecommendService } from './recommend.service';
import { CreateRecommendDto } from './dto/create-recommend.dto';
import { UpdateRecommendDto } from './dto/update-recommend.dto';

@Controller()
export class RecommendController {
  constructor(private readonly recommendService: RecommendService) {}
}
