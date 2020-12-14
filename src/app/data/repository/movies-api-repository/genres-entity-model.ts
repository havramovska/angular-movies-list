export interface GenreEntity {
    id: number;
    name: string;
}

export interface GenresResponse {
    genres: GenreEntity[];
}
