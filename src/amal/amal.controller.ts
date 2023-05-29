import { Controller, Post, Get, Delete, Body, Param, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateAmalDto } from './dto/create-amal.dto';
import { Amal } from './dto/amal-entity';
import { AmalService } from './amal.service';
import { GetAmal } from './interface/GetAmal';

@Controller('amal')
export class AmalController {
    constructor(
        @InjectRepository(Amal)
        private amalRepository: Repository<Amal>, private readonly amalService: AmalService
    ){}

    @Post()
    async create(@Body() createAmalDto: CreateAmalDto){
        return this.amalService.create(createAmalDto)
    }

    @Get()
    async findAll(): Promise<GetAmal>{
        try {
            const data = await this.amalService.findAll()
            return {
                data: data,
                statusCode: HttpStatus.OK,
                message: "Success"
            }
         } catch (error) {}
    }
    
    @Get('/:id')
    async findOne(@Param('id') id:string): Promise<Amal>{
        return await this.amalService.findOne(id)
    }
}

    