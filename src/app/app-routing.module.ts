import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MovieDetailsComponent } from './presentation/components/movie-details/movie-details.component';
import { MoviesListComponent } from './presentation/components/movies-list/movies-list.component';

const routes: Routes = [
  { path: '', component: MoviesListComponent, pathMatch: 'full' },
  { path: 'movie-details/:id', component: MovieDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
