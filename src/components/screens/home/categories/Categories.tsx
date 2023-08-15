import { FC } from "react";
import { useGetGenresQuery } from "../../../../store/api/moviesApi";
import Category from "./category/Category";
import Loading from "../../../ui/Loading/Loading";

const Categories: FC = () => {
    const { data, isLoading } = useGetGenresQuery("/v2.2/films/filters");

    return (
        <section className="categories">
            <div className="container">
                {isLoading ? (
                    <Loading />
                ) : (
                    data?.genres
                        ?.slice(3, 13)
                        .map((el) => (
                            <Category
                                key={el.id}
                                genre={el.genre}
                                genreId={el.id}
                            />
                        ))
                )}
            </div>
        </section>
    );
};

export default Categories;
