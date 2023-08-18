import { FC, useEffect } from "react";
import { useParams } from "react-router-dom";

import { MovieCard } from "../../ui/movieCard/MovieCard";
import "./categoryPage.scss";
import {
    useGetGenresQuery,
    useGetMoviesQuery,
} from "../../../store/api/moviesApi";
import Loading from "../../ui/loading/Loading";
import "./categoryPage.scss";
import { useAppDispatch, useAppSelector } from "../../../hooks/reduxHooks";
import { setMoviesGenre } from "../../../store/movies/moviesSlice";
import Heading from "../../ui/heading/Heading";

const CategoryPage: FC = () => {
    const categoriesArr = ["FILM", "TV_SERIES", "TV_SHOW"];
    const { categoryID } = useParams<{ categoryID?: string }>();
    const dispatch = useAppDispatch();
    const { moviesGenre } = useAppSelector((state) => state.movies);

    const {
        data: films,
        isLoading: isFilmsLoading,
        isSuccess: isFilmsSuccess,
    } = useGetMoviesQuery(
        moviesGenre == 0
            ? `/v2.2/films?order=YEAR&type=${
                  categoriesArr[Number(categoryID) - 1]
              }&ratingFrom=0&ratingTo=10&yearFrom=2000&yearTo=2023&page=1`
            : `/v2.2/films?genres=${moviesGenre}&order=YEAR&type=${
                  categoriesArr[Number(categoryID) - 1]
              }&ratingFrom=0&ratingTo=10&yearFrom=2000&yearTo=2023&page=1`
    );

    const { data: genresList, isSuccess: isGenresSuccess } = useGetGenresQuery(
        "/v2.2/films/filters"
    );

    const determineCategory = () => {
        return categoryID == "1"
            ? "ФИЛЬМЫ"
            : categoryID == "2"
            ? "СЕРИАЛЫ"
            : "ТВ ШОУ";
    };

    `/v2.2/films?genres=1&order=YEAR&type=${
        categoriesArr[Number(categoryID) - 1]
    }&ratingFrom=0&ratingTo=10&yearFrom=2000&yearTo=2023&page=1`;

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="category-page">
            <Heading heading={determineCategory()} />

            <div className="container">
                <div className="category-page__genres-wrapper">
                    <button
                        onClick={() => dispatch(setMoviesGenre(0))}
                        className={`category-page__genre-btn${
                            moviesGenre == 0 ? " active" : ""
                        }`}>
                        ВСЕ
                    </button>
                    {isGenresSuccess
                        ? genresList?.genres.map((genre) => {
                              return (
                                  <button
                                      key={genre.id}
                                      onClick={() =>
                                          dispatch(setMoviesGenre(genre.id))
                                      }
                                      className={`category-page__genre-btn${
                                          moviesGenre == genre.id
                                              ? " active"
                                              : ""
                                      }`}>
                                      {genre.genre}
                                  </button>
                              );
                          })
                        : null}
                </div>
                {films?.items.length == 0 ? (
                    <div className="category-page__not-found">
                        Ничего не найдено
                    </div>
                ) : (
                    <div
                        className={` ${
                            isFilmsLoading
                                ? "category-page__loading-row"
                                : "category-page__row"
                        }`}>
                        {isFilmsLoading ? (
                            <Loading />
                        ) : isFilmsSuccess ? (
                            films?.items?.map((el) => (
                                <MovieCard key={el.kinopoiskId} movie={el} />
                            ))
                        ) : null}
                    </div>
                )}
            </div>
        </div>
    );
};

export default CategoryPage;
