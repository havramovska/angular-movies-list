import { Mapper } from 'src/app/domain/base/mapper';
import { MovieDetails } from 'src/app/domain/model/movie-details.model';
import { Movie } from 'src/app/domain/model/movie.model';
import { MovieDetailsEntity } from '../movies-api-repository/movie-details-entity-model';

export class MovieDetailsEntityMapper extends Mapper<MovieDetailsEntity, MovieDetails> {
    mapFrom(param: MovieDetailsEntity): MovieDetails {
        return {
            genres: param.genres,
            id: param.id,
            overview: param.overview,
            popularity: param.popularity,
            posterPath: param.poster_path,
            releaseDate: param.release_date,
            title: param.title,
            voteAverage: param.vote_average,
            voteCount: param.vote_count,
        }
    }
    mapTo(param: MovieDetails): MovieDetailsEntity {
        // TO DO: map MovieEntity to Movie when needed
        throw new Error('Method not implemented.');
    }

}
