export interface IFilm {
    countries?: ICountry[];
    filmId?: number;
    filmLength?: string;
    genres: IGenre[];
    isAfisha?: number;
    isRatingUp?: null;
    nameEn?: string;
    nameRu?: string;
    posterUrl?: string;
    posterUrlPreview?: string;
    rating?: string;
    ratingChange?: null;
    ratingVoteCount?: number;
    year?: string;
    kinopoiskId?: number;
    kinopoiskHDId?: string;
    imdbId?: string;
    nameOriginal?: string;
    coverUrl?: string;
    logoUrl?: string;
    reviewsCount?: number;
    ratingGoodReview?: number;
    ratingGoodReviewVoteCount?: number;
    ratingKinopoisk?: number;
    ratingKinopoiskVoteCount?: number;
    ratingImdb?: number;
    ratingImdbVoteCount?: number;
    ratingFilmCritics?: number;
    ratingFilmCriticsVoteCount?: number;
    ratingAwait?: number;
    ratingAwaitCount?: number;
    ratingRfCritics?: number;
    ratingRfCriticsVoteCount?: number;
    webUrl?: string;
    slogan?: string;
    description?: string;
    shortDescription?: string;
    editorAnnotation?: string;
    isTicketsAvailable?: boolean;
    productionStatus?: string;
    type?: string;
    ratingMpaa?: string;
    ratingAgeLimits?: string;
    hasImax?: boolean;
    has3D?: boolean;
    lastSync?: string;
    startYear?: number;
    endYear?: number;
    serial?: boolean;
    shortFilm?: boolean;
    completed?: boolean;
}

interface IGenre {
    genre: string;
}
export interface ICountry {
    country: string;
}
