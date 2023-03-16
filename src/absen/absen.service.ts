import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { getRepository, Repository } from 'typeorm';
import { v4 as uuidv4 } from 'uuid';
import { FilterAbsenDto } from './dto/filter-absen.dto';
import { CreateAbsenDto } from './dto/create-absen.dto';
// import { User } from '../entity/user.entity'

@Injectable()
export class AbsenService {



// --------- BAGIAN SERVICE UNTUK ABSEN ---------

    private absen: any[] = [];

    //MENAMPILKAN DATA YANG SUDAH DITAMBAH
    getHadirAll(filterAbsen: FilterAbsenDto): any[]{
        const {nama, noAbsen, kelas, tahunAjaran} = filterAbsen;

        const absen = this.absen.filter((absensi) => {
            let isMatch = true;
            if(nama && absensi.nama != nama){
                isMatch = false;
            } 
            if(noAbsen && absensi.noAbsen != noAbsen){
                isMatch = false;
            }
            if(kelas && absensi.kelas != kelas){
                isMatch = false;
            }
            if(tahunAjaran && absensi.tahunAjaran != tahunAjaran){
                isMatch = false;
            }
            return isMatch;
        })
        return absen;
    }

    getHadir(id: string){
        const absenId = this.findAbsenById(id)
        return this.absen[absenId]
    }

    //MENAMBAHKAN SEBUAH DATA
    postKehadiran(createAbsen: CreateAbsenDto) {
        const { nama, noAbsen, kelas, tahunAjaran } = createAbsen;
        this.absen.push({
            id: uuidv4(),
            nama,
            noAbsen,
            kelas,
            tahunAjaran
    })
    }

    //MENGHAPUS DATA 
    deleteKehadiran(id: string){
        const absenId = this.absen.findIndex((absen) => absen.id == id);
        this.absen.splice(absenId, 1)
    }

    //MENEMUKAN DATA YANG INGIN DICARI
    findAbsenById(id: string){
        const bookIdx = this.absen.findIndex((book) => book.id === id);
        if(bookIdx === -1) {
            throw new NotFoundException(`Book with id ${id} is not found`)
        }
        return bookIdx;
    }

    //DIGUNAKAN UNTUK MENG-UPDATE SEBUAH DATA YANG SUDAH DIBUAT
    updateAbsen(id: string, filterAbsen: FilterAbsenDto){
        const {nama, noAbsen, kelas} = filterAbsen
        const absenId = this.findAbsenById(id)
        this.absen[absenId].nama = nama;
        this.absen[absenId].noAbsen = noAbsen;
        this.absen[absenId].kelas = kelas;
    }
}