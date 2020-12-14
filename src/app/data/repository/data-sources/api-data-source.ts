import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { flatMap, map } from 'rxjs/operators';
import { Genre } from 'src/app/domain/model/genre.model';
import { MovieDetails } from 'src/app/domain/model/movie-details.model';
import { Movie } from 'src/app/domain/model/movie.model';
import { environment } from 'src/environments/environment';
import { GenreEntityMapper } from '../mappers/genres-entity-mapper';
import { MovieDetailsEntityMapper } from '../mappers/movie-details-entity-mapper';
import { MovieEntityMapper } from '../mappers/movies-entity-mapper';
import { Constants } from '../movies-api-repository/constants';
import { GenresResponse } from '../movies-api-repository/genres-entity-model';
import { MovieDetailsEntity } from '../movies-api-repository/movie-details-entity-model';
import { MoviesResponse } from '../movies-api-repository/movies-entity-model';
import { UrlPaths } from '../movies-api-repository/resource-paths';
import { ApiDataSource } from './api-data-source-interface';

@Injectable({
  providedIn: 'root'
})
export class DefaultApiDataSource extends ApiDataSource {
    constructor(
        private http: HttpClient
    ) {
        super();
    }

    getApiPopularMovies(page: number): Observable<Movie> {
        const mapper = new MovieEntityMapper();
        let params = new HttpParams()
        .set(Constants.APIKEY, environment.apiKey)
        .append(Constants.PAGE, page.toString());
        return this.http.get<MoviesResponse>(environment.baseUrl + UrlPaths.POPULAR_MOVIES,
            { params: params })
            .pipe(flatMap((response) => response.results))
            .pipe(map(mapper.mapFrom));
    }

    getApiMovieDetails(id: number): Observable<MovieDetails> {
        const mapper = new MovieDetailsEntityMapper();
        const params = new HttpParams().set(Constants.APIKEY, environment.apiKey);

        return this.http.get<MovieDetailsEntity>(environment.baseUrl + UrlPaths.MOVIE + '/' + id.toString(),
            { params: params })
            .pipe(map(mapper.mapFrom));
    }

    getApiGenres(): Observable<Genre> {
        const mapper = new GenreEntityMapper();
        return this.http.get<GenresResponse>(environment.baseUrl + UrlPaths.GENRES,
            { params: new HttpParams().set(Constants.APIKEY, environment.apiKey) })
            .pipe(flatMap((response) => response.genres))
            .pipe(map(mapper.mapFrom));
    }
}
