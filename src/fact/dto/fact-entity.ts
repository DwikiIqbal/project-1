import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";
import { v4 as uuidv4 } from 'uuid';

@Entity()
export class Fact{
    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column()
    judulFakta: string
  
    @Column()
    isiFakta: string

    @Column()
    sumberFakta: string

    constructor(judulFakta: string, isiFakta: string, sumberFakta: string){
        this.id = uuidv4()
        this.judulFakta   = judulFakta
        this.isiFakta     = isiFakta
        this.sumberFakta  = sumberFakta

    }
}