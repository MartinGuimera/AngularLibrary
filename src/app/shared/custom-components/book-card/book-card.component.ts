import { Component, OnInit, Input } from '@angular/core';
import { Book } from 'src/app/core/management/book/book';

@Component({
  selector: 'app-book-card',
  templateUrl: './book-card.component.html',
  styleUrls: ['./book-card.component.scss']
})
export class BookCardComponent implements OnInit {
  @Input() book: Book;
  photo = 'assets/images/cam1.png';
  constructor() { }

  ngOnInit() {
  }

}
