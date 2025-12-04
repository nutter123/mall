import { Module } from '@nestjs/common';
import { JwtService } from './jwt.service';
import { JwtController } from './jwt.controller';
import { ConfigModule } from '@nestjs/config';

import { TypeOrmModule } from '@nestjs/typeorm';
import { Jwt } from './entities/jwt.entity';

@Module({
  imports: [ConfigModule, TypeOrmModule.forFeature([Jwt])],
  controllers: [JwtController],
  providers: [JwtService],
  exports: [JwtService],
})
export class JwtModule {}
