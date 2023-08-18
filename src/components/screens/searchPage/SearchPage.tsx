import { FC, useEffect } from "react";
import { MovieCard } from "../../ui/movieCard/MovieCard";

import { useParams } from "react-router-dom";
import { useGetMoviesQuery } from "../../../store/api/moviesApi";
import "./searchPage.scss";

import Loading from "../../ui/loading/Loading";
import Heading from "../../ui/heading/Heading";
const SearchPage: FC = () => {
    const { keyword } = useParams();
    const { data, isLoading, isSuccess } = useGetMoviesQuery(
        `https://kinopoiskapiunofficial.tech/api/v2.2/films?order=RATING&type=ALL&ratingFrom=0&ratingTo=10&yearFrom=1000&yearTo=3000&keyword=${keyword}&page=1`
    );

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="search-page">
            <Heading heading={`РЕЗУЛЬТАТ ПОИСКА - ${keyword}`} />
            {data?.items.length == 0 ? (
                <div className="search-page__not-found">Ничего не найдено</div>
            ) : (
                <div
                    className={` ${
                        isLoading
                            ? "search-page__loading-row"
                            : "search-page__row"
                    }`}>
                    {isLoading ? (
                        <Loading />
                    ) : isSuccess ? (
                        data?.items.map((el) => {
                            return (
                                <MovieCard key={el.kinopoiskId} movie={el} />
                            );
                        })
                    ) : null}
                </div>
            )}
        </div>
    );
};

export default SearchPage;
