import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Author } from '../../management/author/author';

@Injectable({
  providedIn: 'root'
})
export class AuthorService {

  private baseUrl = 'http://localhost:8080/'

  constructor(private http: HttpClient) { }

  public findAllAuthors(): Observable<Author[]> {
    return this.http.get<Author[]>(`${this.baseUrl}author/`);
  }

  public findAuthorById(id: number): Observable<Author[]> {
    return this.http.get<Author[]>(`${this.baseUrl}author/${id}`);
  }

  public deleteAuthor(id: number): Observable<Author> {
    return this.http.delete<Author>(`${this.baseUrl}author/${id}`);
  }

  public saveOrUpdate(author: Author): Observable<Author> {
    return this.http.put<Author>(`${this.baseUrl}author/`, author);
  }

}
