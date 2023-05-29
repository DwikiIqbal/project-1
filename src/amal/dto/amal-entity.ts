import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { v4 as uuidv4 } from 'uuid';

@Entity()
export class Amal{
    @PrimaryGeneratedColumn("uuid")
    id: string

    @Column()
    penyumbang: string

    @Column()
    saluran: string

    @Column()
    nominal: number

    constructor(penyumbang:string, saluran:string, nominal:number){
        this.id = uuidv4()
        this.penyumbang = penyumbang
        this.saluran = saluran
        this.nominal = nominal
    }
}