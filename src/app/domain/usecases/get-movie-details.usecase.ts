import { UseCase } from '../base/usecase';
import { MoviesRepository } from '../repositories/movie.repository';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { MovieDetails } from '../model/movie-details.model';

@Injectable({
    providedIn: 'root'
})
export class GetMovieDetailsUsecase implements UseCase<GetMovieDetailsParams, MovieDetails>  {
    constructor(
        private movieRepo: MoviesRepository
    ) { }

    execute(params: GetMovieDetailsParams): Observable<MovieDetails> {
        let id = params.id;
        return this.movieRepo.getMoviesDetails(id);
    }
}

export class GetMovieDetailsParams {
    constructor(
        public id: number
    ) { }
}

