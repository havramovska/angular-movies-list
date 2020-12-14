import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DefaultMoviesDataService } from './presentation/services/movies-data.service';
import { HttpClientModule } from '@angular/common/http';
import { GetPopularMoviesByGenreUsecase } from './domain/usecases/get-popular-movies-by-genre.usecase';
import { GetGenresUsecase } from './domain/usecases/get-genres.usecase';
import { DefaultApiDataSource } from './data/repository/data-sources/api-data-source';
import { ApiDataSource } from './data/repository/data-sources/api-data-source-interface';
import { MoviesRepository } from './domain/repositories/movie.repository';
import { MoviesRepositoryImpl } from './data/repository/movies-api-repository/movies-repository-impl';
import { MoviesDataService } from './presentation/services/movies-data-service-interface';
import { MoviesListComponent } from './presentation/components/movies-list/movies-list.component';
import { MovieDetailsComponent } from './presentation/components/movie-details/movie-details.component';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    MoviesListComponent,
    MovieDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot([
      {
        path: 'movies',
        component: MoviesListComponent
      }
    ]),
    BrowserAnimationsModule,
    MatProgressSpinnerModule,
    NgbModule,
  ],
  providers: [
    { provide: ApiDataSource, useClass: DefaultApiDataSource },
    { provide: MoviesRepository, useClass: MoviesRepositoryImpl },
    { provide: MoviesDataService, useClass: DefaultMoviesDataService },
    GetPopularMoviesByGenreUsecase,
    GetGenresUsecase
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
