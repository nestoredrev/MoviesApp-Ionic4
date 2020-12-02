export interface MoviesResponse {
    total_pages:   number;
    results:       Movie[];
    dates:         Dates;
    total_results: number;
    page:          number;
}

export interface Dates {
    minimum: Date;
    maximum: Date;
}

export interface Movie {
    id:                number;
    original_title:    string;
    poster_path:       string;
    video:             boolean;
    vote_average:      number;
    popularity:        number;
    overview:          string;
    release_date:      Date;
    title:             string;
    vote_count:        number;
    adult:             boolean;
    backdrop_path:     string;
    original_language: string;
    genre_ids:         number[];
}