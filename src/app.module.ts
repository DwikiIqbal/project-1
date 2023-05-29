import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BooksModule } from './books/books.module';
import { AbsenModule } from './absen/absen.module';
import { UserModule } from './user/user.module';
import { TypeOrmConfig } from './config/typeorm.config';
import { SiswaModule } from './siswa/siswa.module';
import { TokoModule } from './toko/toko.module';
import { AmalModule } from './amal/amal.module';
import { ArtikelModule } from './artikel/artikel.module';
import { FactModule } from './fact/fact.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(TypeOrmConfig),
    BooksModule, 
    AbsenModule,
    UserModule,
    SiswaModule,
    TokoModule,
    AmalModule,
    ArtikelModule,
    FactModule
  ],
  providers: [],
})
export class AppModule {}
