export interface Movie {
  title: string;
  voteAverage: number;
  voteCount: number;
  posterPath: string;
  id: number;
  genreIds: Array<number>
}
