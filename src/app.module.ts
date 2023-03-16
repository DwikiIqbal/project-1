import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BooksModule } from './books/books.module';
import { AbsenModule } from './absen/absen.module';
import { UserModule } from './user/user.module';
import { TypeOrmConfig } from './config/typeorm.config';
import { SiswaModule } from './siswa/siswa.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(TypeOrmConfig),
    BooksModule, 
    AbsenModule,
    UserModule,
    SiswaModule
  ],
  providers: [],
})
export class AppModule {}
