import { createSlice } from "@reduxjs/toolkit";
import { IFilm } from "../../types/types";

interface IInitialState {
    moviesGenre: number;
    searchMovies: IFilm[];
}

const initialState: IInitialState = {
    moviesGenre: 0,
    searchMovies: [],
};

export const moviesSlice = createSlice({
    name: "movies",
    initialState,
    reducers: {
        setMoviesGenre: (state, action) => {
            state.moviesGenre = action.payload;
        },
        setSearchMovies: (state, action) => {
            state.moviesGenre = action.payload;
        },
    },
});

export const { setMoviesGenre, setSearchMovies } = moviesSlice.actions;
export default moviesSlice.reducer;
