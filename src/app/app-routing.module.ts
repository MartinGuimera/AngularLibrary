import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GenreComponent } from './screens/genre/genre.component';
import { DashboardComponent } from './screens/dashboard/dashboard.component';
import { AuthorComponent } from './screens/author/author.component';
import { PublicLayoutComponent } from './shared/layout/public-layout/public-layout.component';


const routes: Routes = [

  {
    path: '',
    redirectTo: '/books',
    pathMatch: 'full',
  },
  {
    path: '',
    component: PublicLayoutComponent,
    children: [
      { path: 'books', component: DashboardComponent },
      { path: 'genres', component: GenreComponent },
      { path: 'authors', component: AuthorComponent }
    ],
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
