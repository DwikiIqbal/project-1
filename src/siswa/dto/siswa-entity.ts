import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
import { v4 as uuidv4 } from 'uuid';

@Entity()
export class Siswa{
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column()
    name: string;

    @Column()
    kelas: string;

    @Column()
    tahunAjaran: number;

    constructor( name: string, kelas: string, tahunAjaran: number) {
        this.id = uuidv4();
        this.name = name;
        this.kelas = kelas;
        this.tahunAjaran = tahunAjaran;
    }
}