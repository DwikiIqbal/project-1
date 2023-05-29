import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { v4 as uuidv4 } from 'uuid';

@Entity()
export class Artikel {
    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column()
    judulArtikel: string

    @Column({ type: 'text', array: true, nullable: true })
    kategoriArtikel: string[]
  
    @Column()
    isiArtikel: string

    @Column()
    pembuatArtikel: string

    constructor(judulArtikel: string, kategoriArtikel: string[], isiArtikel: string, pembuatArtikel: string){
        this.id = uuidv4()
        this.judulArtikel   = judulArtikel
        this.kategoriArtikel = kategoriArtikel
        this.isiArtikel     = isiArtikel
        this.pembuatArtikel = pembuatArtikel
    }

    getKategoriArtikel(): string[] {
        return this.kategoriArtikel;
      }
}


