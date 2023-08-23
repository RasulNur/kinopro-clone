import { FC, useCallback, useState } from "react";
import Heading from "../../ui/heading/Heading";
import ImageViewer from "react-simple-image-viewer";
import { useParams } from "react-router-dom";
import {
    useGetMovieStaffQuery,
    useGetMoviesByIdQuery,
    useGetMoviesQuery,
    useGetPicturesQuery,
} from "../../../store/api/moviesApi";
import { IStaff } from "../../../types/types";

import "./moviePage.scss";
import Loading from "../../ui/loading/Loading";
import Similar from "./similar/Similar";

const MoviePage: FC = () => {
    const { movieId } = useParams<string>();

    const [currentImage, setCurrentImage] = useState<number>(0);
    const [isViewerOpen, setIsViewerOpen] = useState<boolean>(false);

    const { data: movie, isLoading: isMovieLoading } = useGetMoviesByIdQuery(
        `/v2.2/films/${movieId}`
    );

    const { data: staff } = useGetMovieStaffQuery(
        `/v1/staff?filmId=${movieId}`
    );
    const { data: pictures } = useGetPicturesQuery(
        `/v2.2/films/${movieId}/images?type=STILL&page=1`
    );
    const {
        data: similarMovies,
        isLoading: isSimilarLoading,
        isSuccess: isSimilarSuccess,
    } = useGetMoviesQuery(
        `https://kinopoiskapiunofficial.tech/api/v2.2/films/${movieId}/similars`
    );

    const openImageViewer = useCallback((index: number) => {
        setCurrentImage(index);
        setIsViewerOpen(true);
        document.body.style.overflowY = "hidden";
    }, []);

    const closeImageViewer = () => {
        setCurrentImage(0);
        setIsViewerOpen(false);
        document.body.style.overflowY = "scroll";
    };

    return (
        <div className="movie-page">
            <Heading
                heading={
                    movie?.nameRu
                        ? movie?.nameRu
                        : movie?.nameEn
                        ? movie?.nameEn
                        : movie?.nameOriginal
                }
            />

            <div className="container">
                {isMovieLoading ? (
                    <Loading />
                ) : (
                    <div className="movie-page__wrapper">
                        <div className="movie-page__row">
                            <div className="movie-page__img-wrapper">
                                <img
                                    className="movie-page__img"
                                    src={movie?.posterUrl}
                                    alt=""
                                />
                            </div>
                            <div className="movie-page__info">
                                <h3 className="movie-page__movie-name">
                                    {movie?.nameRu
                                        ? movie?.nameRu
                                        : movie?.nameEn
                                        ? movie?.nameEn
                                        : movie?.nameOriginal}
                                </h3>
                                <ul className="movie-page__info-list">
                                    {movie?.nameOriginal ? (
                                        <li className="movie-page__info-item">
                                            <span className="movie-page__item-title">
                                                Оригинальное название:{" "}
                                            </span>{" "}
                                            {movie?.nameOriginal}
                                        </li>
                                    ) : null}
                                    {movie?.ratingImdb ? (
                                        <li className="movie-page__info-item">
                                            <span className="movie-page__item-title">
                                                Рейтинг IMDb:
                                            </span>{" "}
                                            {movie?.ratingImdb}
                                        </li>
                                    ) : null}
                                    {movie?.ratingKinopoisk ? (
                                        <li className="movie-page__info-item">
                                            <span className="movie-page__item-title">
                                                Рейтинг Kinopoisk:
                                            </span>{" "}
                                            {movie?.ratingKinopoisk}
                                        </li>
                                    ) : null}
                                    {movie?.countries ? (
                                        <li className="movie-page__info-item">
                                            <span className="movie-page__item-title">
                                                Страна:
                                            </span>{" "}
                                            {movie?.countries?.map(
                                                (el, id, arr) =>
                                                    id == arr.length - 1
                                                        ? el.country
                                                        : `${el.country}, `
                                            )}
                                        </li>
                                    ) : null}
                                    <li className="movie-page__info-item">
                                        <span className="movie-page__item-title">
                                            Год:
                                        </span>{" "}
                                        {movie?.year}
                                    </li>
                                    <li className="movie-page__info-item">
                                        <span className="movie-page__item-title">
                                            Режиссер:
                                        </span>{" "}
                                        {staff
                                            ?.filter(
                                                (el: IStaff) =>
                                                    el.professionKey ===
                                                    "DIRECTOR"
                                            )
                                            .map((el) => el.nameRu)
                                            .splice(0, 1)}
                                    </li>
                                    <li className="movie-page__info-item">
                                        <span className="movie-page__item-title">
                                            Актёры:
                                        </span>{" "}
                                        {staff
                                            ?.filter((el) => {
                                                return (
                                                    el.professionKey == "ACTOR"
                                                );
                                            })
                                            .splice(0, 10)
                                            ?.map((el, id, arr) =>
                                                el.nameRu !== ""
                                                    ? id == arr.length - 1
                                                        ? `${el.nameRu}`
                                                        : `${el.nameRu}, `
                                                    : null
                                            )}
                                    </li>
                                    <li className="movie-page__info-item">
                                        <span className="movie-page__item-title">
                                            Жанры:
                                        </span>{" "}
                                        {movie?.genres.map((el, id, arr) =>
                                            id == arr.length - 1
                                                ? el.genre
                                                : `${el.genre}, `
                                        )}
                                    </li>
                                    {movie?.ratingAgeLimits ? (
                                        <li className="movie-page__info-item">
                                            <span className="movie-page__item-title">
                                                Возраст:{" "}
                                            </span>{" "}
                                            <span className="movie-page__age">
                                                {`${movie?.ratingAgeLimits?.substring(
                                                    3
                                                )}+ `}
                                            </span>
                                        </li>
                                    ) : null}
                                </ul>
                            </div>
                        </div>
                        {movie?.description ? (
                            <div className="movie-page__movie-descr">
                                <h3 className="movie-page__descr-heading">
                                    Про что{" "}
                                    {movie?.nameRu
                                        ? movie?.nameRu
                                        : movie?.nameEn
                                        ? movie?.nameEn
                                        : movie?.nameOriginal}
                                    :
                                </h3>
                                <p className="movie-page__descr-text">
                                    {movie?.description}
                                </p>
                            </div>
                        ) : null}
                        {pictures?.items && pictures?.items.length > 0 ? (
                            <div className="movie-page__pictures-wrapper">
                                <h3 className="movie-page__pictures-heading">
                                    Картинки:
                                </h3>
                                <ul className="movie-page__pictures-list">
                                    {pictures?.items
                                        .map((el, index, arr) => {
                                            return (
                                                <li
                                                    className="movie-page__pictures-iten"
                                                    key={el.imageUrl}>
                                                    <img
                                                        className="movie-page__pictures-image"
                                                        src={el.imageUrl}
                                                        onClick={() =>
                                                            openImageViewer(
                                                                index
                                                            )
                                                        }
                                                        alt={
                                                            movie?.nameRu
                                                                ? movie?.nameRu
                                                                : movie?.nameEn
                                                                ? movie?.nameEn
                                                                : movie?.nameOriginal
                                                        }
                                                    />

                                                    {isViewerOpen && (
                                                        <ImageViewer
                                                            src={arr
                                                                .map(
                                                                    (el) =>
                                                                        el.imageUrl
                                                                )
                                                                .splice(0, 4)}
                                                            currentIndex={
                                                                currentImage
                                                            }
                                                            disableScroll={true}
                                                            closeOnClickOutside={
                                                                true
                                                            }
                                                            onClose={
                                                                closeImageViewer
                                                            }
                                                            backgroundStyle={{
                                                                backgroundColor:
                                                                    "rgb(0 0 0 / 45%)",
                                                            }}
                                                        />
                                                    )}
                                                </li>
                                            );
                                        })
                                        .splice(0, 4)}
                                </ul>
                            </div>
                        ) : null}
                    </div>
                )}
            </div>

            {isSimilarSuccess && similarMovies?.items.length !== 0 ? (
                <Similar
                    similarMovies={similarMovies?.items}
                    isSimilarLoading={isSimilarLoading}
                    isSimilarSuccess={isSimilarSuccess}
                />
            ) : null}
        </div>
    );
};

export default MoviePage;
