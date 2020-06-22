import { Genre } from './../../../core/management/genre/genre';
import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { GenreService } from 'src/app/core/services/genre/genre.service';

@Component({
  selector: 'app-genre-dialog',
  templateUrl: './genre-dialog.component.html',
  styleUrls: ['./genre-dialog.component.scss']
})
export class GenreDialogComponent implements OnInit {

  title: string;
  genre: Genre = new Genre();

  constructor(
    public dialogRef: MatDialogRef<GenreDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private genreService: GenreService,
  ) { }

  ngOnInit() {
    this.onLoad();
  }

  onLoad() {
    this.title = this.data.title;
    if (this.data.genre != null) {
      this.genre = this.data.genre;
    }
  }

  onClose() {
    this.dialogRef.close();
  }


  onSave(){
    this.genreService.saveOrUpdate(this.genre).subscribe(result => {
      this.onClose();
    });
  }

}
