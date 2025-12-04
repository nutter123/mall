import { Module } from '@nestjs/common';
import { CalcService } from './calc.service';
import { CalcController } from './calc.controller';
import { UserModule } from '../user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '../user/entities/user.entity';
import { Site } from '../site/entities/site.entity';
import { ProductSku } from '../product/entities/product-sku.entity';
import { ProductSpu } from '../product/entities/product-spu.entity';

@Module({
  imports: [UserModule, TypeOrmModule.forFeature([Site, ProductSku, ProductSpu])],
  controllers: [CalcController],
  providers: [CalcService],
})
export class CalcModule {}
