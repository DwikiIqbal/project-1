import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BooksModule } from './books/books.module';
import { AbsenModule } from './absen/absen.module';
import { UserModule } from './user/user.module';
import { SiswaModule } from './siswa/siswa.module';
import { TokoModule } from './toko/toko.module';
import { AmalModule } from './amal/amal.module';
import { ArtikelModule } from './artikel/artikel.module';
import { FactModule } from './fact/fact.module';
import { ConfigModule } from '@nestjs/config';
import { ApiModule } from './api/api.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { getEnvPath } from './common/helper/env.helper';
import { TypeOrmConfigService } from './shared/typeorm/typeorm.service';
import { User } from './api/user/user.entity'; // Import entitas "User" di sini

const envFilePath: string = getEnvPath(`${__dirname}/common/envs`);

@Module({
  imports: [
    BooksModule, 
    AbsenModule,
    UserModule,
    SiswaModule,
    TokoModule,
    AmalModule,
    ArtikelModule,
    FactModule,
    ConfigModule.forRoot({ envFilePath, isGlobal: true }),
    TypeOrmModule.forRootAsync({ useClass: TypeOrmConfigService }),
    TypeOrmModule.forFeature([User]), // Daftarkan entitas "User" di sini
    ApiModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
