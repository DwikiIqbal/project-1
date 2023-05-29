import { Controller, Post, Get, Put, Delete, Body, Param, NotFoundException, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Toko } from './dto/toko-entity';
import { Repository } from 'typeorm';
import { TokoService } from './toko.service';
import { CreateTokoDto } from './dto/create-toko.dto';
import { UpdateTokoDto } from './dto/update-toko.dto';
import { GetToko } from './interface/GetToko';

@Controller('toko')
export class TokoController {
    constructor (
    @InjectRepository(Toko)
    private tokoRepository: Repository<Toko>,
    private readonly tokoService: TokoService
    ){};

    @Post()
    async create(@Body() createTokoDto: CreateTokoDto): Promise<Toko>{
        return this.tokoService.create(createTokoDto)
    }

    @Get()
    async findAll(): Promise<GetToko>{
        try {
            const data = await this.tokoService.findAll();
            return {
                data: data,
                statusCode: HttpStatus.OK,
                message: 'Success'
            } 
        } catch (error) {
            
        }
    }

    @Get('/:id')
    async findOne(@Param('id') id: string): Promise<Toko>{
        return await this.tokoService.findOne( id )
    }

    @Delete('/:id')
    async delete(@Param('id') id: string): Promise<void>{
        this.tokoRepository.delete(id)
    }

    @Put('/:id')
    async update(@Param('id') id: string, @Body() updateTokoDto: UpdateTokoDto){
        const { namaBarang, jenisBarang, hargaBarang } = updateTokoDto;
        const tokoId = await this.tokoRepository.findOne({where: {id: id}})
        
        if(!tokoId){
            throw new NotFoundException(`Barang dengan id ${id} tidak ditemukan`)
        }

        tokoId.namaBarang = namaBarang;
        tokoId.jenisBarang = jenisBarang;
        tokoId.hargaBarang = hargaBarang;

        return this.tokoRepository.save(tokoId)
    }
}