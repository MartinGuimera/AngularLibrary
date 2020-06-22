import { AuthorService } from './../../../core/services/author/author.service';
import { Component, OnInit, Inject } from '@angular/core';
import { Author } from 'src/app/core/management/author/author';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-author-dialog',
  templateUrl: './author-dialog.component.html',
  styleUrls: ['./author-dialog.component.scss']
})
export class AuthorDialogComponent implements OnInit {

  title: string;
  author: Author = new Author();

  constructor(
    public dialogRef: MatDialogRef<AuthorDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private authorService : AuthorService,
  ) { }

  ngOnInit() {
    this.onLoad();
  }

  onLoad() {
    this.title = this.data.title;
    if (this.data.author != null) {
      this.author = this.data.author;
    }
  }

  onClose() {
    this.dialogRef.close();
  }

  onSave() {
    this.authorService.saveOrUpdate(this.author).subscribe(result => {
      this.onClose();
    })
  }

}
