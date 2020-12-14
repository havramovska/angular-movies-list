import { Observable } from 'rxjs';
import { Genre } from 'src/app/domain/model/genre.model';
import { MovieDetails } from 'src/app/domain/model/movie-details.model';
import { Movie } from 'src/app/domain/model/movie.model';

export abstract class ApiDataSource {
    abstract getApiPopularMovies(page: number): Observable<Movie>;
    abstract getApiMovieDetails(id: number): Observable<MovieDetails>;
    abstract getApiGenres(): Observable<Genre>;
}
