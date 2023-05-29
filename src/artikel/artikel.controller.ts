import { Controller, Post, Get, Put, Delete, Body, Param, HttpStatus, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Artikel } from './dto/artikel-entity';
import { Repository } from 'typeorm';
import { ArtikelService } from './artikel.service';
import { CreateArtikelDto } from './dto/create-artikel.dto';
import { UpdateArtikelDto } from './dto/update-artikel.dto';
import { GetArtikel } from './interface/GetArtikel';

@Controller('artikel')
export class ArtikelController {
    constructor(
        @InjectRepository(Artikel)
        private artikelRepository: Repository<Artikel>,
        private readonly artikelService: ArtikelService
    ){}

    @Post()
    async create(@Body() createArtikelDto: CreateArtikelDto){
        return await this.artikelService.create(createArtikelDto)
    }

    @Get()
    async findAll(): Promise<GetArtikel>{
        try {
            const data = await this.artikelService.findAll()
            return {
                data: data,
                statusCode: HttpStatus.OK,
                message: "Success"
            }
        } catch (error) {}
    }

    @Get('/:id')
    async findOne(@Param('id') id:string): Promise<Artikel>{
        return await this.artikelService.findOne(id)
    }

    @Delete('/:id')
    async delete(@Param('id') id: string): Promise<void>{
        this.artikelRepository.delete(id)
    }

    @Put('/:id')
    async update(
        @Param('id') id: string,
        @Body() updateArtikelDto: UpdateArtikelDto
    ): Promise<Artikel> {
        const { judulArtikel, kategoriArtikel, isiArtikel, pembuatArtikel } = updateArtikelDto
        const artikelId = await this.artikelRepository.findOne({ where: { id: id } });
        
        // Menghasilkan pesan apabila tidak ditemukan id yang dicari
        if (!artikelId) {
            throw new NotFoundException(`Artikel dengan Id ${id} yang anda cari tidak ada`)
        }
    
        artikelId.judulArtikel = judulArtikel;
        artikelId.isiArtikel = isiArtikel;
        artikelId.pembuatArtikel = pembuatArtikel;
        artikelId.kategoriArtikel = kategoriArtikel;
    
        return this.artikelRepository.save(artikelId)
    }
    

}

