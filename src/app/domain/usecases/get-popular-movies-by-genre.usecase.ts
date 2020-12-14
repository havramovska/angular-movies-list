import { UseCase } from '../base/usecase';
import { Movie } from '../model/movie.model';
import { Genre } from '../model/genre.model';
import { MoviesRepository } from '../repositories/movie.repository';
import { Observable } from 'rxjs';
import { filter } from 'rxjs/operators';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class GetPopularMoviesByGenreUsecase implements UseCase<GetPopularMoviesByGenreParams, Movie>  {
    constructor(
        private movieRepo: MoviesRepository
    ) { }

    execute(params: GetPopularMoviesByGenreParams): Observable<Movie> {
        let genreIds = params.genres.map(genre => genre.id);
        return this.movieRepo.getPopularMovies(params.page)
            .pipe(
                filter((movie) => movie
                    .genreIds
                    .some(id => genreIds.includes(id))
                )
            );
    }
}

export class GetPopularMoviesByGenreParams {
    constructor(
        public genres: Array<Genre>,
        public page: number
    ) { }
}

