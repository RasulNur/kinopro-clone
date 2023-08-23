import { FC } from "react";

import Loading from "../../../ui/loading/Loading";
import { MovieCard } from "../../../ui/movieCard/MovieCard";

import "./similar.scss";
import { IFilm } from "../../../../types/types";

interface ISimilarProps {
    similarMovies?: IFilm[];
    isSimilarLoading?: boolean;
    isSimilarSuccess?: boolean;
}

const Similar: FC<ISimilarProps> = ({
    similarMovies,
    isSimilarLoading,
    isSimilarSuccess,
}) => {
    return (
        <div className="similar">
            {similarMovies?.length === 0 ? null : (
                <div className="container">
                    <div className="similar__header">
                        <h2 className="similar__heading">Смотреть также</h2>
                    </div>
                    {isSimilarLoading ? (
                        <Loading />
                    ) : isSimilarSuccess ? (
                        <div className="similar__row">
                            {similarMovies?.slice(0, 6).map((el) => (
                                <MovieCard
                                    movie={el}
                                    isNeedQuery={true}
                                    key={
                                        el.kinopoiskId
                                            ? el.kinopoiskId
                                            : el.filmId
                                    }
                                />
                            ))}
                        </div>
                    ) : null}
                </div>
            )}
        </div>
    );
};

export default Similar;
