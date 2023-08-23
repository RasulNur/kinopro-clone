import { FC, useEffect } from "react";
import "./movieCard.scss";
import { FaPlay } from "react-icons/fa";
import { IFilm } from "../../../types/types";
import { Link } from "react-router-dom";
import { useLazyGetMoviesByIdQuery } from "../../../store/api/moviesApi";

interface IMovieCardProps {
    movie: IFilm;
    isNeedQuery?: boolean;
}

export const MovieCard: FC<IMovieCardProps> = ({ movie, isNeedQuery }) => {
    const [getMoviesById, { data }] = useLazyGetMoviesByIdQuery();
    useEffect(() => {
        // if (!movie.genres) {
        //     getMoviesById(`/v2.2/films/${movie.filmId}`);
        // }
        if (isNeedQuery) {
            getMoviesById(`/v2.2/films/${movie.filmId}`);
            console.log(data);
        }
    }, []);

    return (
        <div className="movie-card">
            <Link
                to={`/movie/${isNeedQuery ? movie!.filmId : movie.kinopoiskId}`}
                onClick={() => {
                    window.scrollTo(0, 0);
                }}>
                <div className="movie-card__img-wrapper">
                    <img
                        className="movie-card__img"
                        src={movie.posterUrl}
                        alt={
                            movie.nameRu
                                ? movie.nameRu
                                : movie.nameEn
                                ? movie.nameEn
                                : movie.nameOriginal
                        }
                    />
                </div>
                <FaPlay />
                <div className="movie-card__footer">
                    <h4 className="movie-card__heading">
                        {movie.nameRu
                            ? movie.nameRu
                            : movie.nameEn
                            ? movie.nameEn
                            : movie.nameOriginal}
                    </h4>
                    <small className="movie-card__subheading">
                        {movie.genres
                            ? movie?.genres[0]?.genre
                            : typeof data !== "undefined"
                            ? data.genres[0]?.genre
                            : null}
                    </small>
                </div>
            </Link>
        </div>
    );
};
