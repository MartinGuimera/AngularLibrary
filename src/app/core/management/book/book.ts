import { Author } from './../author/author';
import { Publisher } from './../publisher/publisher';
import { Genre } from '../genre/genre';
export class Book {
    id: number;
    title: string;
    year: number;
    author: Author;
    review: string;
    genre: Genre;
}