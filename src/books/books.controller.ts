import { Controller, Get, Post, Body, Put, Delete, Query} from '@nestjs/common';
import { Param } from '@nestjs/common/decorators';
import { BooksService } from './books.service';
import { CreateBookDto } from './dto/create-book.dto';
import { FilterBookDto } from './dto/filter-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';

@Controller('books')
export class BooksController {
    constructor(private booksService: BooksService){}

    @Get()
    getBooks(
        @Query() filter: FilterBookDto){
        return this.booksService.getBooks(filter)
    }

    @Get('/:id')
    getBook(@Param('id') id: string){
        return this.booksService.getBook(id)
    }

    @Post()
    createBook(@Body() payload: CreateBookDto){
        return this.booksService.createBook(payload);
    }

    @Delete('/:id')
    deleteBook(@Param('id') id: string) {
        return this.booksService.deleteBook(id)
    }

    @Put('/:id')
    updateBook(
        @Param('id') id: string,
        @Body() payload: UpdateBookDto, 
       
        ){
        return this.booksService.updateBook(id, payload)
    }
}


