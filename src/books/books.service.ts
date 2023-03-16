import { Injectable, NotFoundException } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';
import { CreateBookDto } from './dto/create-book.dto';
import { FilterBookDto } from './dto/filter-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';

@Injectable()
export class BooksService {
    private books: any[] = [];

    getBooks(filter: FilterBookDto): any[]{
        const  { title, author, kategori, min_year, max_year} = filter;

        const books = this.books.filter((book) => {
            let isMatch = true;
            if (title && book.title != title){
                isMatch = false;

            }
            if (author && book.author != author){
                isMatch = false;

            }
            if (kategori && book.kategori != kategori){
                isMatch = false;

            }
            return isMatch;
        }); 
        return books;
    }

    getBook(id: string){
        const bookIdx = this.findBookById(id);
        return this.books[bookIdx];
    }



    createBook(createBookDto: CreateBookDto){
        const { title, author, kategori, year} = createBookDto;
        this.books.push({
            id: uuidv4(),
            title,
            author,
            kategori,
            year
        });
    }

    updateBook(id: string, updateBookDto: UpdateBookDto){
        const { title, author, kategori, year} = updateBookDto;
        const bookIdx = this.findBookById(id);
        this.books[bookIdx].title = title;
        this.books[bookIdx].author = author;
        this.books[bookIdx].kategori = kategori;
        this.books[bookIdx].yaer = year;
    }

    findBookById(id: string){
        const bookIdx = this.books.findIndex((book) => book.id === id);
        if(bookIdx === -1) {
            throw new NotFoundException(`Book with id ${id} is not found`)
        }
        return bookIdx;
    }

    deleteBook(id: string){
        const bookIdx = this.findBookById(id)
        this.books.splice(bookIdx, 1);
    }
}