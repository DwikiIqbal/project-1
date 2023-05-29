import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AmalController } from './amal.controller';
import { AmalService } from './amal.service';
import { Amal } from './dto/amal-entity';

@Module({
  imports: [TypeOrmModule.forFeature([Amal])],
  controllers: [AmalController],
  providers: [AmalService]
})
export class AmalModule {}
