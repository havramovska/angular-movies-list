import { Mapper } from 'src/app/domain/base/mapper';
import { Movie } from 'src/app/domain/model/movie.model';
import { MovieEntity } from '../movies-api-repository/movies-entity-model';

export class MovieEntityMapper extends Mapper<MovieEntity, Movie> {
    mapFrom(param: MovieEntity): Movie {
        return {
            title: param.title,
            voteAverage: param.vote_average,
            voteCount: param.vote_count,
            posterPath: param.poster_path,
            id: param.id,
            genreIds: param.genre_ids
        }
    }
    mapTo(param: Movie): MovieEntity {
        // TO DO: map MovieEntity to Movie when needed
        throw new Error('Method not implemented.');
    }

}
