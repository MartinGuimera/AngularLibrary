import { Genre } from './../../management/genre/genre';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GenreService {

  private baseUrl = 'http://localhost:8080/'

  constructor(private http: HttpClient) { }

  public findAllGenre(): Observable<Genre[]> {
    return this.http.get<Genre[]>(`${this.baseUrl}genre/`);
  }

  public findGenreById(id: number): Observable<Genre[]> {
    return this.http.get<Genre[]>(`${this.baseUrl}genre/${id}`);
  }

  public deleteGenre(id: number): Observable<Genre> {
    return this.http.delete<Genre>(`${this.baseUrl}genre/${id}`);
  }

  public saveOrUpdate(genre: Genre): Observable<Genre> {
    return this.http.put<Genre>(`${this.baseUrl}genre/`, genre);
  }

}
