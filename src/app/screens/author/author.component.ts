import { AuthorService } from './../../core/services/author/author.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Author } from 'src/app/core/management/author/author';
import { MatPaginator } from '@angular/material/paginator';
import { MatDialog } from '@angular/material/dialog';
import { AuthorDialogComponent } from 'src/app/shared/custom-components/author-dialog/author-dialog.component';
import { DialogConfirmationComponent } from 'src/app/shared/custom-components/dialog-confirmation/dialog-confirmation.component';

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.scss']
})
export class AuthorComponent implements OnInit {

  displayedColumns: string[] = ['id', 'name', 'action'];
  dataSource = new MatTableDataSource<Author>();

  @ViewChild(MatPaginator, {static:true}) paginator: MatPaginator;

  constructor(
    private dialog: MatDialog,
    private authorService : AuthorService,
  ) { }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.data = AUTHORS_DATA;
  }

  newAuthor() {
    const dialogRef = this.dialog.open(AuthorDialogComponent, {
      width: "auto",
      height: "auto",
      data: { title: "New Author" }
    });

    dialogRef.afterClosed().subscribe(result => {
      this.ngOnInit();
    });
  }

  editAuthor(author: Author) {
    const dialogRef = this.dialog.open(AuthorDialogComponent, {
      width: "auto",
      height: "auto",
      data: { title: "Edit Autor", author: author }
    });

    dialogRef.afterClosed().subscribe(result => {
      this.ngOnInit();
    });
  }

  delete(author: Author) {
    const dialogRef = this.dialog.open(DialogConfirmationComponent, {
      disableClose: true,
      width: "auto",
      height: "auto",
      data: { title: "Do you want to delete author?"}
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.authorService.deleteAuthor(author.id).subscribe(result => {
          this.ngOnInit();
        });
      }
    });
  }

}


export const AUTHORS_DATA: Author[] = [
  { id: 1, name: 'Daniel Fregman ' },
  { id: 2, name: 'Klaus Teuber'},
  { id: 3, name: 'Matt Leacock' },
  { id: 4, name: 'Jamey Stegmaier'},
  { id: 5, name: 'Keng Leong Yeo' },
  {
    id: 6, name: 'Gil Hova'
  },
  { id: 7, name: 'Kelly Adams' },
  { id: 8, name: 'J. Alex Kavern' },
  { id: 9, name: 'Michael Aldridge'},
  { id: 10, name: 'Corey Young' },
  { id: 11, name: 'Grant Rodiek' },
  { id: 12, name: 'Sen-Foong Lim' },
  { id: 13, name: 'Travis Hancock' },
]