import { Controller, Get, Post, Delete, Put, Body, Param, NotFoundException, HttpStatus } from '@nestjs/common';
import { SiswaService } from './siswa.service';
import { Siswa } from 'src/siswa/dto/siswa.entity';
import { CreateSiswaDto } from './dto/create-siswa.dto';
import { UpdateSiswaDto } from './dto/update-siswa.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { GetSiswa } from './interface/GetSiswa';

@Controller('siswa')
export class SiswaController {
    
    constructor( @InjectRepository(Siswa)
    private siswaRepository: Repository<Siswa>, private readonly siswaService: SiswaService){}

    @Post()
    async create(@Body() createSiswaDto: CreateSiswaDto): Promise<Siswa>{
        return this.siswaService.create(createSiswaDto)
    }

    @Get()
    async findAll(): Promise<GetSiswa>{
        try {
            const data = await this.siswaService.findAll();
            return {
                data: data,
                statusCode: HttpStatus.OK,
                message: 'Success'
            }
        } catch (error) {
            
        }
    }

    @Get('/:id')
    async findOne(@Param('id') id: string): Promise<Siswa>{
        return await this.siswaService.findOne( id )
    }

    @Delete('/:id')
    async delete(@Param('id') id: string): Promise<void>{
        this.siswaRepository.delete( id )
    }

    @Put('/:id')
    async update( 
        /* Parameter pada update,
        - @Param digunakan untuk mendapatkan nilai id siswa yang dikirim melalui parameter permintaan HTTP PUT. Nilai ini kemudian digunakan untuk memperbarui data siswa yang sesuai pada database.

        - @Body digunakan untuk mendapatkan data siswa yang akan diperbarui, seperti nama siswa, kelas, dan tahun ajaran. Data ini dikirim melalui body permintaan HTTP PUT dan disimpan dalam objek updateSiswaDto yang merupakan instance dari class UpdateSiswaDto

        ----------

        - Promise<Siswa> menandakan bahwa fungsi async akan mengembalikan suatu Promise yang akan menghasilkan nilai bertipe Siswa.

        */ 
        @Param('id') id: string,
        @Body() updateSiswaDto: UpdateSiswaDto
        ): Promise<Siswa> { 
        
        /* 
        - variabel dibawah ini mengambil objek dari DTO UpdateSiswaDto
        - variabel siswaId digunakan untuk mencari data siswa berdasarkan id yang diambil dari parameter     fungsi. Hasil pencarian akan disimpan dalam variabel siswaId. Kode tersebut diasumsikan berada dalam 
        sebuah fungsi yang menerima parameter id.
        
        ----------

        - where disini digunakan untuk menentukan kriteria pencarian pada database.

        */
        const { name, kelas, tahunAjaran} = updateSiswaDto
        const siswaId = await this.siswaRepository.findOne({ where: {id: id}});
        
        // Menghasilkan pesan apabila tidak ditemukan id yang dicari
        if(!siswaId){
            throw new NotFoundException(`Siswa dengan Id ${id} yang anda cari tidak ada`)
        }


        /* 
        
        kode dibawah ini merupakan sebuah method yang memberikan nilai pada objek "siswaId" dan menyimpannya ke dalam sebuah repository
        
        */
        siswaId.name = name;
        siswaId.kelas = kelas;
        siswaId.tahunAjaran = tahunAjaran;

        return this.siswaRepository.save(siswaId)
        
    }
}
