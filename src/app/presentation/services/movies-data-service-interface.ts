import { Genre } from 'src/app/domain/model/genre.model';

export abstract class MoviesDataService {
    abstract getGenres();    
    abstract getPopularMoviesByGenres(page: number);    
    abstract getMovieDetailsById(id: number);    
}
