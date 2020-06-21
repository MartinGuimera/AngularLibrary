import { Genre } from './../../core/management/genre/genre';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { GenreDialogComponent } from 'src/app/shared/custom-components/genre-dialog/genre-dialog.component';
import { DialogConfirmationComponent } from 'src/app/shared/custom-components/dialog-confirmation/dialog-confirmation.component';

@Component({
  selector: 'app-genre',
  templateUrl: './genre.component.html',
  styleUrls: ['./genre.component.scss']
})
export class GenreComponent implements OnInit {

  displayedColumns: string[] = ['id', 'name', 'action'];
  dataSource = new MatTableDataSource<Genre>();

  constructor(
    private dialog: MatDialog,

  ) { }

  ngOnInit() {
    this.dataSource.data = GENRE_DATA;

  }

  newGenre() {
    const dialogRef = this.dialog.open(GenreDialogComponent, {
      width: "auto",
      height: "auto",
      data: { title: "Nueva Genro" }
    });

    dialogRef.afterClosed().subscribe(result => {
      this.ngOnInit();
    });
  }

  editGenre(genre: Genre) {
    const dialogRef = this.dialog.open(GenreDialogComponent, {
      width: "auto",
      height: "auto",
      data: { title: "Editar genero", genre: genre }
    });

    dialogRef.afterClosed().subscribe(result => {
      this.ngOnInit();
    });
  }

  delete(category: Genre) {
    const dialogRef = this.dialog.open(DialogConfirmationComponent, {
      disableClose: true,
      width: "auto",
      height: "auto",
      data: { title: "¿Desea eliminar el genero?" }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        //delete susbscription
      }
    });
  }
}

export const GENRE_DATA: Genre[] = [
  { id: 1, name: 'Dados' },
  { id: 2, name: 'Fichas' },
  { id: 3, name: 'Cartas' },
  { id: 4, name: 'Rol' },
  { id: 5, name: 'Tableros' },
  { id: 6, name: 'Temáticos' },
  { id: 7, name: 'Europeos' },
  { id: 8, name: 'Guerra' },
  { id: 9, name: 'Abstractos' },
  { id: 10, name: 'Party Games' },
  { id: 11, name: 'Juegos Rápidos' },
  { id: 12, name: 'Aventura' },
  { id: 13, name: 'Plataformas' },
]