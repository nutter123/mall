import { Controller } from '@nestjs/common';
import { ComboService } from './combo.service';

@Controller()
export class ComboController {
  constructor(private readonly comboService: ComboService) {}
}
