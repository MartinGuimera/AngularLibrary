import { Author } from './../author/author';
import { Publisher } from './../publisher/publisher';
import { Genre } from '../genre/genre';
export class Book {
    id: number;
    title: string;
    publisher: Publisher;
    year: number;
    author: Author;
    review: string;
    genre: Genre;
}