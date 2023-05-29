import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Artikel } from './dto/artikel-entity';
import { Repository } from 'typeorm';
import { CreateArtikelDto } from './dto/create-artikel.dto';

@Injectable()
export class ArtikelService {
    constructor(
        @InjectRepository(Artikel)
        private artikelRepository: Repository<Artikel>
    ){}

    async create(createArtikelDto: CreateArtikelDto): Promise<Artikel>{
        const {judulArtikel, kategoriArtikel, isiArtikel, pembuatArtikel} = createArtikelDto;
        const artikel = new Artikel(judulArtikel, kategoriArtikel, isiArtikel, pembuatArtikel)
        artikel.judulArtikel   = judulArtikel;
        artikel.kategoriArtikel = kategoriArtikel.filter(kategori => kategori !== ''); // Filter nilai kosong
        artikel.isiArtikel     = isiArtikel;
        artikel.pembuatArtikel = pembuatArtikel;

        return await this.artikelRepository.save(artikel)
    }

    async findAll(): Promise<Artikel[]> {
        return await this.artikelRepository.find()
    }

    async findOne(id: string): Promise<Artikel>{
        return await this.artikelRepository.findOne({where: {id}})
    }
}
