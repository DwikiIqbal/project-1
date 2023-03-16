import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import AbsenController from './absen.controller';
import { AbsenService } from './absen.service';
// import { User } from '../entity/user.entity';

@Module({
  // imports: [TypeOrmModule.forFeature([User])], 
  controllers: [AbsenController],
  providers: [AbsenService]
})
export class AbsenModule {}
