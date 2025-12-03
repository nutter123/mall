import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { JwtService } from './jwt.service';
import { CreateJwtDto } from './dto/create-jwt.dto';
import { UpdateJwtDto } from './dto/update-jwt.dto';

@Controller('jwt')
export class JwtController {
  constructor(private readonly jwtService: JwtService) {}

}
