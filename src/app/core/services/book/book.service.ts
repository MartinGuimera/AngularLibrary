import { Book } from 'src/app/core/management/book/book';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  private baseUrl = 'http://localhost:8080/'

  constructor(private http: HttpClient) { }

  public findAllBook(): Observable<Book[]> {
    return this.http.get<Book[]>(`${this.baseUrl}book/`);
  }

  public findBookById(id: number): Observable<Book[]> {
    return this.http.get<Book[]>(`${this.baseUrl}book/${id}`);
  }

  public deleteBook(id: number): Observable<Book> {
    return this.http.delete<Book>(`${this.baseUrl}book/${id}`);
  }

  public saveOrUpdate(book: Book): Observable<Book> {
    return this.http.put<Book>(`${this.baseUrl}book/`, book);
  }

}
