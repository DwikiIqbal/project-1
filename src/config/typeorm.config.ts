import { Users } from "src/entity/user.entity";
import { TypeOrmModuleOptions } from "@nestjs/typeorm";
import { Siswa } from "src/siswa/dto/siswa.entity";


export const TypeOrmConfig: TypeOrmModuleOptions = {
    type: 'postgres',
    host: 'localhost',
    // port: 63989,
    username: 'postgres',
    password:   'kdwiki',
    database: 'test',
    entities: [Siswa],
    synchronize: true,

}