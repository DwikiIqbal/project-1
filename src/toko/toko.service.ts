import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateTokoDto } from './dto/create-toko.dto';
import { Toko } from './dto/toko-entity';

@Injectable()
export class TokoService {
    constructor(
        @InjectRepository(Toko)
        private tokoRepository: Repository<Toko>
    ){}

    async create( createTokoDto: CreateTokoDto): Promise<Toko>{
        const { namaBarang, jenisBarang, hargaBarang } = createTokoDto;
        const toko = new Toko(namaBarang, jenisBarang, hargaBarang)
        toko.namaBarang = namaBarang,
        toko.jenisBarang = jenisBarang,
        toko.hargaBarang = hargaBarang

        return await this.tokoRepository.save(toko)
    }

    async findAll(): Promise<Toko[]>{
        return this.tokoRepository.find()
    }

    async findOne(id: string): Promise<Toko>{
        return this.tokoRepository.findOne({where: {id}})
    }
}
