import { Injectable } from "@angular/core";
import { Observable } from 'rxjs';
import { UseCase } from '../base/usecase';
import { Genre } from '../model/genre.model';
import { MoviesRepository } from '../repositories/movie.repository';


@Injectable({
    providedIn: 'root'
})
export class GetGenresUsecase implements UseCase<void, Genre> {
    constructor(
        private movieRepo: MoviesRepository
    ) {
        
    }

    execute(): Observable<Genre> {
        return this.movieRepo.getGenres();
    }
}

