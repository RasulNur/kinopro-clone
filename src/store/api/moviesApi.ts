import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IFilm } from "../../types/types";

const API_URL = "https://kinopoiskapiunofficial.tech/api";

interface IQueryFilms {
    films: IFilm[];
}
interface IQueryGenreFilms {
    items: IFilm[];
}

interface IQueryCategoryFilms {
    items: IFilm[];
}

interface IQueryGenres {
    genres: IGenre[];
}

interface IGenre {
    id: number;
    genre: string;
}

export const moviesApi = createApi({
    reducerPath: "api",
    tagTypes: ["Movie"],
    baseQuery: fetchBaseQuery({
        baseUrl: API_URL,
        headers: {
            // "X-API-KEY": "af897659-786d-406b-8f11-57372041dcf0",
            // "X-API-KEY": "5d02e2d4-2179-46e7-a7cf-d2e013ab5db4",
            "X-API-KEY": "3f9a98ea-33f7-401f-97d0-c6649f05be72",

            "Content-Type": "application/json",
        },
    }),
    endpoints: (builder) => ({
        getMovies: builder.query<IQueryFilms, string>({
            query: (searchTerm) => `${searchTerm}`,
        }),
        getGenreMovies: builder.query<IQueryGenreFilms, string>({
            query: (searchTerm) => `${searchTerm}`,
        }),
        getCategoryFilms: builder.query<IQueryCategoryFilms, string>({
            query: (searchTerm) => `${searchTerm}`,
        }),
        getGenres: builder.query<IQueryGenres, string>({
            query: (searchTerm) => `${searchTerm}`,
        }),
    }),
});

export const {
    useGetMoviesQuery,
    useGetGenreMoviesQuery,
    useGetGenresQuery,
    useGetCategoryFilmsQuery,
} = moviesApi;