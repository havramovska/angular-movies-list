import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieDetails } from 'src/app/domain/model/movie-details.model';
import { environment } from 'src/environments/environment';
import { DefaultMoviesDataService } from '../../services/movies-data.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss']
})
export class MovieDetailsComponent implements OnInit {
  dataReady: boolean = false;
  movieDetails: Array<MovieDetails> = [];
  imgBaseUrl = environment.imgBaseUrl;
  movieId: number;

  constructor(
    private moviesService: DefaultMoviesDataService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.movieId = params.id;
    });

    this.moviesService.getMovieDetailsById(this.movieId).subscribe(
      res => {
        this.movieDetails.push(res);
        setTimeout(() => {
          this.dataReady = true;
        }, 500);
      }
    )
  }

}
