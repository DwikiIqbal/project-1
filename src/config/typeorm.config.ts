import { Users } from "src/entity/user.entity";
import { TypeOrmModuleOptions } from "@nestjs/typeorm";


export const TypeOrmConfig: TypeOrmModuleOptions = {
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password:  'kdwikiiqbal23',
    database: 'test',
    entities: [],
    autoLoadEntities: true,
    synchronize: true,

}