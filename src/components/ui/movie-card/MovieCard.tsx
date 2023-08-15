import { FC } from "react";
import "./movieCard.scss";
import { FaPlay } from "react-icons/fa";
import { IFilm } from "../../../types/types";

interface IMovieCardProps {
    movie: IFilm;
}

export const MovieCard: FC<IMovieCardProps> = ({ movie }) => {
    return (
        <div className="movie-card">
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
                    {movie?.genres[0]?.genre}
                </small>
            </div>
        </div>
    );
};
