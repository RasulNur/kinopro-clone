import { FC } from "react";
import "./category.scss";
import Slider from "./slider/Slider";

interface ICategoryProps {
    genre: string;
    genreId: number;
}

const Category: FC<ICategoryProps> = ({ genre, genreId }) => {
    return (
        <div className="category">
            <div className="category__heading-wrapper">
                <h2 className="category__heading">{genre}</h2>
            </div>
            <div className="category__slider">
                <Slider genreId={genreId} />
            </div>
        </div>
    );
};

export default Category;
