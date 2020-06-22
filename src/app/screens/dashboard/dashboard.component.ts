import { Genre } from './../../core/management/genre/genre';
import { Component, OnInit } from '@angular/core';
import { GENRE_DATA } from '../genre/genre.component';
import { AUTHORS_DATA } from '../author/author.component';
import { Author } from 'src/app/core/management/author/author';
import { FormControl } from '@angular/forms';
import { Book } from 'src/app/core/management/book/book';
import { MatDialog } from '@angular/material/dialog';
import { BookDialogComponent } from 'src/app/shared/custom-components/book-dialog/book-dialog.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  genres: Genre[] = GENRE_DATA;
  authors: Author[] = AUTHORS_DATA;
  genreControl = new FormControl();
  filterName: string;
  books: Book[];

  constructor(private dialog: MatDialog, ) { }

  ngOnInit() {
    this.books = BOOK_DATA;
  }

  newBook() {
    const dialogRef = this.dialog.open(BookDialogComponent, {
      width: "auto",
      height: "auto",
      data: { title: "New book", authors: this.authors, genres: this.genres }
    });

    dialogRef.afterClosed().subscribe(result => {
      this.ngOnInit();
    });
  }

  editBook(book: Book) {
    const dialogRef = this.dialog.open(BookDialogComponent, {
      width: "auto",
      height: "auto",
      data: { title: "Edit book", authors: this.authors, genres: this.genres, book: book }
    });

    dialogRef.afterClosed().subscribe(result => {
      this.ngOnInit();
    });
  }


}

const BOOK_DATA: Book[] = [
  { id: 1, title: 'La Generala', year: 6, genre: { id: 1, name: 'Dados' }, author: { id: 2, name: 'Klaus Teuber' }, review: 'Esto es una prueba, no te asustes, aqui va la descripción' },
  { id: 1, title: 'La Generala', year: 6, genre: { id: 1, name: 'Dados' }, author: { id: 2, name: 'Klaus Teuber' }, review: 'Esto es una prueba, no te asustes, aqui va la descripción' },
  { id: 1, title: 'La Generala', year: 6, genre: { id: 1, name: 'Dados' }, author: { id: 2, name: 'Klaus Teuber' }, review: 'Esto es una prueba, no te asustes, aqui va la descripción' },
  { id: 1, title: 'La Generala', year: 6, genre: { id: 1, name: 'Dados' }, author: { id: 2, name: 'Klaus Teuber' }, review: 'Esto es una prueba, no te asustes, aqui va la descripción' },
  { id: 1, title: 'La Generala', year: 6, genre: { id: 1, name: 'Dados' }, author: { id: 2, name: 'Klaus Teuber' }, review: 'Esto es una prueba, no te asustes, aqui va la descripción' },
  { id: 1, title: 'La Generala', year: 6, genre: { id: 1, name: 'Dados' }, author: { id: 2, name: 'Klaus Teuber' }, review: 'Esto es una prueba, no te asustes, aqui va la descripción' },
  { id: 1, title: 'La Generala', year: 6, genre: { id: 1, name: 'Dados' }, author: { id: 2, name: 'Klaus Teuber' }, review: 'Esto es una prueba, no te asustes, aqui va la descripción' },
  { id: 1, title: 'La Generala', year: 6, genre: { id: 1, name: 'Dados' }, author: { id: 2, name: 'Klaus Teuber' }, review: 'Esto es una prueba, no te asustes, aqui va la descripción' },
  { id: 1, title: 'La Generala', year: 6, genre: { id: 1, name: 'Dados' }, author: { id: 2, name: 'Klaus Teuber' }, review: 'Esto es una prueba, no te asustes, aqui va la descripción' },
  { id: 1, title: 'La Generala', year: 6, genre: { id: 1, name: 'Dados' }, author: { id: 2, name: 'Klaus Teuber' }, review: 'Esto es una prueba, no te asustes, aqui va la descripción' },
  { id: 1, title: 'La Generala', year: 6, genre: { id: 1, name: 'Dados' }, author: { id: 2, name: 'Klaus Teuber' }, review: 'Esto es una prueba, no te asustes, aqui va la descripción' },
  { id: 1, title: 'La Generala', year: 6, genre: { id: 1, name: 'Dados' }, author: { id: 2, name: 'Klaus Teuber' }, review: 'Esto es una prueba, no te asustes, aqui va la descripción' },


]