import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IFilm, IPicture, IStaff } from "../../types/types";

const API_URL = "https://kinopoiskapiunofficial.tech/api";

interface IQueryFilms {
    items: IFilm[];
}
interface IQueryGenres {
    genres: IQueryGenre[];
}
interface IQueryGenre {
    id: number;
    genre: string;
}
interface IQueryPictures {
    items: IPicture[];
}

export const moviesApi = createApi({
    reducerPath: "api",
    tagTypes: ["Movie"],
    baseQuery: fetchBaseQuery({
        baseUrl: API_URL,
        headers: {
            // "X-API-KEY": "af897659-786d-406b-8f11-57372041dcf0",
            "X-API-KEY": "5d02e2d4-2179-46e7-a7cf-d2e013ab5db4",
            // "X-API-KEY": "3f9a98ea-33f7-401f-97d0-c6649f05be72",

            "Content-Type": "application/json",
        },
    }),
    endpoints: (builder) => ({
        getMovies: builder.query<IQueryFilms, string>({
            query: (searchTerm) => `${searchTerm}`,
        }),
        getGenres: builder.query<IQueryGenres, string>({
            query: (searchTerm) => `${searchTerm}`,
        }),
        getMoviesById: builder.query<IFilm, string>({
            query: (searchTerm) => `${searchTerm}`,
        }),
        getMovieStaff: builder.query<IStaff[], string>({
            query: (searchTerm) => `${searchTerm}`,
        }),
        getPictures: builder.query<IQueryPictures, string>({
            query: (searchTerm) => `${searchTerm}`,
        }),
    }),
});

export const {
    useGetMoviesQuery,
    useGetGenresQuery,
    useGetMoviesByIdQuery,
    useGetMovieStaffQuery,
    useGetPicturesQuery,
} = moviesApi;
