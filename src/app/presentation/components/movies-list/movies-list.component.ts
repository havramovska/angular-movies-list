import { DOCUMENT } from '@angular/common';
import { Component, HostListener, Inject, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { DefaultMoviesDataService } from '../../services/movies-data.service';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.scss']
})
export class MoviesListComponent implements OnInit {
  genresIds = Array<Number>();
  dataReady: boolean = false;
  movies = [];
  imgBaseUrl = environment.imgBaseUrl;
  moviesFilteredData = [];
  selectedItem: any;
  toggledMenu: string = '';

  constructor(
    private moviesService: DefaultMoviesDataService,
    @Inject(DOCUMENT) private document: Document
  ) { }

  ngOnInit(): void {
    this.moviesService.getGenres().toPromise().then((result) =>
      this.moviesService.getPopularMoviesByGenres(1).subscribe(
        res => {
          this.movies.push(res);
          setTimeout(() => {
            this.dataReady = true;
            // filter movies in order to prepopulate selected tab
            this.filterMovies(result[0].id.toString(), result[0].name)
          }, 500);
        }
      )
    );
  }

  filterMovies(genreId, tab) {
    this.moviesFilteredData = [];
    this.moviesFilteredData = this.movies.filter(s => s.genreIds.includes(+genreId));
    this.selectedItem = tab;
    this.toggledMenu = '';
    this.document.body.classList.remove('no-scroll');
  }

  openMenu() {
    this.toggledMenu = this.toggledMenu === '' ? 'open' : '';
    if (this.toggledMenu !== '') {
      this.document.body.classList.add('no-scroll');
    } else {
      this.document.body.classList.remove('no-scroll');
    }
  }

  @HostListener('window:unload', ['$event'])
  async unloadHandler(event) {
    if (event.currentTarget.performance.navigation.type !== PerformanceNavigation.TYPE_RELOAD) {
      window.alert('closed')
    }
  }

  ngOnDestroy() {
    console.log('HERE')
  }
}
