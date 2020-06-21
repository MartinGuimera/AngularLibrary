import { CoreModule } from '../core/core.module';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { GenreComponent } from './genre/genre.component';
import { AuthorComponent } from './author/author.component';

@NgModule({
    declarations: [DashboardComponent, GenreComponent, AuthorComponent],
    imports: [SharedModule, CoreModule],
    exports: [],
    entryComponents: [],
    providers: []
})
export class ScreensModule { }