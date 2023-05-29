import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { v4 as uuidv4 } from 'uuid';

@Entity()
export class Toko{
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column()
    namaBarang: string;

    @Column()
    jenisBarang: string;

    @Column()
    hargaBarang: number;

    constructor( namaBarang: string, jenisBarang: string, hargaBarang: number ){
        this.id = uuidv4()
        this.namaBarang = namaBarang
        this.jenisBarang = jenisBarang
        this.hargaBarang = hargaBarang
    }
}