import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SiswaController } from './siswa.controller';
import { SiswaService } from './siswa.service';
import { Siswa } from 'src/siswa/dto/siswa-entity';

@Module({
  imports: [TypeOrmModule.forFeature([Siswa])],
  controllers: [SiswaController],
  providers: [SiswaService]
})
export class SiswaModule {}
