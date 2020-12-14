import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Genre } from 'src/app/domain/model/genre.model';
import { MovieDetails } from 'src/app/domain/model/movie-details.model';
import { Movie } from 'src/app/domain/model/movie.model';
import { MoviesRepository } from 'src/app/domain/repositories/movie.repository';
import { ApiDataSource } from '../data-sources/api-data-source-interface';
@Injectable({
    providedIn: 'root'
})
export class MoviesRepositoryImpl extends MoviesRepository {
    constructor(
        private dataSource: ApiDataSource
    ) {
        super();
    }

    getPopularMovies(page: number): Observable<Movie> {
        return this.dataSource.getApiPopularMovies(page);
    }

    getMoviesDetails(id: number): Observable<MovieDetails> {
        return this.dataSource.getApiMovieDetails(id);
    }

    getGenres(): Observable<Genre> {
        return this.dataSource.getApiGenres();
    }
}