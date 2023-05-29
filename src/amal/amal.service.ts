import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Amal } from './dto/amal-entity';
import { CreateAmalDto } from './dto/create-amal.dto';

@Injectable()
export class AmalService {
    constructor (
        @InjectRepository(Amal)
        private amalRepository: Repository<Amal>
    ){}

    async create( createAmalDto: CreateAmalDto ): Promise<Amal>{
        const { penyumbang, saluran, nominal } = createAmalDto
        const amal = new Amal(penyumbang, saluran, nominal)
        amal.penyumbang = penyumbang;
        amal.saluran = saluran;
        amal.nominal = nominal;

        return await this.amalRepository.save(amal)
    }

    async findAll(): Promise<Amal[]>{
        return this.amalRepository.find()
    }

    async findOne(id: string): Promise<Amal>{
        return this.amalRepository.findOne({where: {id}})
    }
}
