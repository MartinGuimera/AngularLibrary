import { Genre } from './../../../core/management/genre/genre';
import { Book } from './../../../core/management/book/book';
import { Component, OnInit, Inject } from '@angular/core';
import { Author } from 'src/app/core/management/author/author';
import { FormControl } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-book-dialog',
  templateUrl: './book-dialog.component.html',
  styleUrls: ['./book-dialog.component.scss']
})
export class BookDialogComponent implements OnInit {

  title: string;
  book: Book = new Book();
  genres: Genre[];
  genre: Genre;
  authors: Author[];
  genreControl = new FormControl();
  authorControl = new FormControl();

  constructor(public dialogRef: MatDialogRef<BookDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
    this.onLoad();
  }

  onLoad() {
    this.title = this.data.title;
    this.genres = this.data.genres;
    this.authors = this.data.authors;
    if (this.data.book != null) {
      this.book = this.data.book;
      this.genreControl.setValue(this.book.genre);
      this.authorControl.setValue(this.book.author);
    }
  }

  onClose() {
    this.dialogRef.close();
  }

}
