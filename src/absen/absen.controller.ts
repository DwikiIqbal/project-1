import { Controller, Get, Param, Query, Body, Post, Delete, Put } from '@nestjs/common';
import { AbsenService } from './absen.service';
import { FilterAbsenDto } from './dto/filter-absen.dto';
import { CreateAbsenDto } from './dto/create-absen.dto';
// import { Users } from '../entity/user.entity'

@Controller('absen')
export default class AbsenController {
    constructor(private absenService: AbsenService){}

    @Get()
    getHadirAll(@Query() filterAbsen: FilterAbsenDto){
        return this.absenService.getHadirAll(filterAbsen);
    }
   
    @Get('/:id')
    getHadir(
        @Param('id') id: string
    ){
        return this.absenService.getHadir(id)
    }

    @Post()
    postKehadiran(
        @Body() payload: CreateAbsenDto
    ){
        return this.absenService.postKehadiran(payload)
    }

    @Put('/:id')
    updateAbsen(
        @Param('id') id: string,
        @Body() payload: FilterAbsenDto
    ){
        return this.absenService.updateAbsen(id, payload);
    }
    
    @Delete('/:id')
    deleteKehadiran(@Param('id') id: string){
        return this.absenService.deleteKehadiran(id)
    }

}
