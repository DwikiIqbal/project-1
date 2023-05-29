import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Siswa } from 'src/siswa/dto/siswa-entity';
import { Repository } from 'typeorm';
import { CreateSiswaDto } from './dto/create-siswa.dto';


@Injectable()
export class SiswaService {
    constructor(
        @InjectRepository(Siswa)
        private siswaRepository: Repository<Siswa>
    ) {}

    async create( createSiswaDto: CreateSiswaDto): Promise<Siswa>{
        const { name, kelas, tahunAjaran } = createSiswaDto;
       const siswa = new Siswa(name, kelas, tahunAjaran);
        
         return await this.siswaRepository
         .createQueryBuilder()
         .insert()
         .into(Siswa)
         .values({ 
            name : siswa.name,
            kelas: siswa.kelas,
            tahunAjaran: siswa.tahunAjaran
        })
        .execute()
        .then(result => {
            siswa.id = result.identifiers[0].id;
            return siswa;
          });
        }
       
    

    async findAll(): Promise<Siswa[]>{
        return this.siswaRepository.find()
    }

    async findOne(id: string): Promise<Siswa>{
        return this.siswaRepository.findOne({ where: {id}})
    }

    

   
}
