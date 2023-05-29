import { Controller, Post, Get, Delete, Put, Body, Param, HttpStatus, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { FactService } from './fact.service';
import { CreateFactDto } from './dto/create-fact.dto';
import { UpdateFactDto } from './dto/update-fact.dto';
import { GetFact } from './interface/GetFact';
import { Fact } from './dto/fact-entity';

@Controller('fact')
export class FactController {
    constructor(
        @InjectRepository(Fact)
        private factRepository: Repository<Fact>,
        private readonly factService: FactService
    ){}

    @Post()
    async create(@Body() createFactDto: CreateFactDto){
        return await this.factService.create(createFactDto)
    }

    @Get()
    async findAll(): Promise<GetFact>{
        try {
            const data = await this.factService.findAll()
            return {
                data: data,
                statusCode: HttpStatus.OK,
                message: "Success"
            }
        } catch (error) {}
    }

    @Get('/:id')
    async findOne(@Param('id') id:string): Promise<Fact>{
        return await this.factService.findOne(id)
    }

    @Delete('/:id')
    async delete(@Param('id') id: string): Promise<void>{
        this.factRepository.delete(id)
    }

    // @Put('/:id')
    // async update(
    //     @Param('id') id: string,
    //     @Body() updateFactDto: UpdateFactDto
    // ): Promise<Fact> {
    //     const { judulFakta, isiFakta, sumberFakta } = updateFactDto
    //     const factId = await this.factRepository.findOne({ where: { id: id } });
        
    //     // Menghasilkan pesan apabila tidak ditemukan id yang dicari
    //     if (!factId) {
    //         throw new NotFoundException(`Artikel dengan Id ${id} yang anda cari tidak ada`)
    //     }
    
    //     factId.judulFakta = judulFakta;
    //     factId.isiFakta = isiFakta;
    //     factId.sumberFakta = sumberFakta;
    
    //     return this.factRepository.save(factId)
    // }
}
