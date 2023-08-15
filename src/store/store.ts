import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import moviesReducer from "./movies/moviesSlice";
import { moviesApi } from "./api/moviesApi";

export const store = configureStore({
    reducer: {
        movies: moviesReducer,
        [moviesApi.reducerPath]: moviesApi.reducer,
    },
    middleware: (getDefauldMiddleware) =>
        getDefauldMiddleware({ serializableCheck: false }).concat(
            moviesApi.middleware
        ),
});

setupListeners(store.dispatch);
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
