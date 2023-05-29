import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Toko } from './dto/toko-entity';
import { TokoController } from './toko.controller';
import { TokoService } from './toko.service';

@Module({
  imports: [TypeOrmModule.forFeature([Toko])],
  controllers: [TokoController],
  providers: [TokoService]
})
export class TokoModule {}
