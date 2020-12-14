import { Injectable } from '@angular/core';
import { filter, map, toArray } from 'rxjs/operators';
import { Genre } from 'src/app/domain/model/genre.model';
import { GetGenresUsecase } from 'src/app/domain/usecases/get-genres.usecase';
import { GetMovieDetailsParams, GetMovieDetailsUsecase } from 'src/app/domain/usecases/get-movie-details.usecase';
import { GetPopularMoviesByGenreParams, GetPopularMoviesByGenreUsecase } from 'src/app/domain/usecases/get-popular-movies-by-genre.usecase';
import { MoviesDataService } from './movies-data-service-interface';

@Injectable({
  providedIn: 'root'
})
export class DefaultMoviesDataService extends MoviesDataService {
  private _genres = Array<Genre>();

  public get genres(): Array<Genre>{
    return this._genres
  }
  
  constructor(
    private getGenresUsecase: GetGenresUsecase,
    private getPopularMoviesUsecase: GetPopularMoviesByGenreUsecase,
    private getMovieDetailsUsecase: GetMovieDetailsUsecase
  ) {
    super();
  }

  private requiredGenres = [
    'Action',
    'Thriller',
    'Drama',
    'Science Fiction',
    'Comedy'
  ]

  getGenres() {
    this._genres = [];
    return this.getGenresUsecase
      .execute()
      .pipe(filter((genre) => this.requiredGenres.includes(genre.name)))
      .pipe(map((genre) => {
        this._genres.push(genre)
        return genre
      }))
      .pipe(toArray());
  }

  getPopularMoviesByGenres(page: number) {
    return this.getPopularMoviesUsecase
      .execute(new GetPopularMoviesByGenreParams(this._genres, 1))
  }

  getMovieDetailsById(id: number) {
    return this.getMovieDetailsUsecase
      .execute(new GetMovieDetailsParams(id))
  }
}
