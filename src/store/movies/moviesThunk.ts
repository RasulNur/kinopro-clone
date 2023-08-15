// import { createAsyncThunk } from "@reduxjs/toolkit";
// import { getMovies, getGenres } from "../api/api1";

// export const fetchMoviesThunk = createAsyncThunk(
//     "movies/fetch",
//     async (query: string) => {
//         try {
//             const res = await getMovies(query);
//             return res.data;
//         } catch (e) {
//             return e;
//         }
//     }
// );

// export const fetchGenresThunk = createAsyncThunk(
//     "genres/fetch",
//     async (query: string) => {
//         const res = await getGenres(query);
//         return res.data;
//     }
// );
