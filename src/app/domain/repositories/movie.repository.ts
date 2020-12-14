import { Observable } from 'rxjs';
import { Genre } from '../model/genre.model';
import { MovieDetails } from '../model/movie-details.model';
import { Movie } from '../model/movie.model';

export abstract class MoviesRepository {
    abstract getPopularMovies(page: number): Observable<Movie>;
    abstract getMoviesDetails(id: number): Observable<MovieDetails>;
    abstract getGenres(): Observable<Genre>;
}
