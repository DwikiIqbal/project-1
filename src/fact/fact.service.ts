import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Fact } from './dto/fact-entity';
import { CreateFactDto } from './dto/create-fact.dto';

@Injectable()
export class FactService {
    constructor(
        @InjectRepository(Fact)
        private factRepository: Repository<Fact>
    ){}
   
    async create(createFactDto: CreateFactDto): Promise<Fact>{
        const {judulFakta, isiFakta, sumberFakta} = createFactDto;
        const fakta = new Fact(judulFakta, isiFakta, sumberFakta)
        fakta.judulFakta   = judulFakta;
        fakta.isiFakta     = isiFakta;
        fakta.sumberFakta = sumberFakta;

        return await this.factRepository.save(fakta)
    }

    async findAll(): Promise<Fact[]> {
        return await this.factRepository.find()
    }

    async findOne(id: string): Promise<Fact>{
        return await this.factRepository.findOne({where: {id}})
    }
}
