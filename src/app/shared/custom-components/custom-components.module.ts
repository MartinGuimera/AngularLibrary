import { BookDialogComponent } from './book-dialog/book-dialog.component';
import { AuthorDialogComponent } from 'src/app/shared/custom-components/author-dialog/author-dialog.component';
import { DialogConfirmationComponent } from 'src/app/shared/custom-components/dialog-confirmation/dialog-confirmation.component';
import { GenreDialogComponent } from './genre-dialog/genre-dialog.component';
import { BookCardComponent } from './book-card/book-card.component';
import { NgModule } from '@angular/core';
import { CoreModule } from 'src/app/core/core.module';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@NgModule({
    declarations: [BookCardComponent, GenreDialogComponent, DialogConfirmationComponent, AuthorDialogComponent, BookDialogComponent],
    imports: [CoreModule],
    exports: [BookCardComponent],
    entryComponents: [GenreDialogComponent, DialogConfirmationComponent, AuthorDialogComponent, BookDialogComponent],
    providers: [
        {
            provide: MAT_DIALOG_DATA,
            useValue: {},
        },
    ]
})
export class CustomComponentsModule { }