import { PartialType } from '@nestjs/mapped-types';
import { AddCartDto } from './create-cart.dto';

export class UpdateCartDto extends PartialType(AddCartDto) {}
