import { FC } from "react";
import { MovieCard } from "../../ui/movie-card/MovieCard";

import { Link, useParams } from "react-router-dom";
import { useGetCategoryFilmsQuery } from "../../../store/api/moviesApi";
import "./searchPage.scss";
import { FaHome } from "react-icons/fa";
import Loading from "../../ui/Loading/Loading";
const SearchPage: FC = () => {
    const { keyword } = useParams();
    const { data, isLoading, isSuccess } = useGetCategoryFilmsQuery(
        `https://kinopoiskapiunofficial.tech/api/v2.2/films?order=RATING&type=ALL&ratingFrom=0&ratingTo=10&yearFrom=1000&yearTo=3000&keyword=${keyword}&page=1`
    );
    console.log(keyword);
    console.log(data);
    return (
        <div className="search-page">
            <div className="search-page__header">
                <div className="search-page__wrapper">
                    <h1 className="search-page__heading">
                        РЕЗУЛЬТАТ ПОИСКА - {keyword}
                    </h1>
                    <div className="search-page__breadcrumb">
                        <Link to="/" className="search-page__link">
                            <FaHome />
                            ГЛАВНАЯ
                        </Link>
                        <span className="search-page__dash">-</span>
                        <span className="search-page__span">
                            результат поиска - {keyword}
                        </span>
                    </div>
                </div>
            </div>
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
