import { Module } from '@nestjs/common';
import { ArtikelController } from './artikel.controller';
import { ArtikelService } from './artikel.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Artikel } from './dto/artikel-entity';

@Module({
  imports: [TypeOrmModule.forFeature([Artikel])],
  controllers: [ArtikelController],
  providers: [ArtikelService]
})
export class ArtikelModule {}
