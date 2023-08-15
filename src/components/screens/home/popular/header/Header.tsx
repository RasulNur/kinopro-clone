import { FC } from "react";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";
import Swiper from "swiper";

import "./header.scss";

interface IPopularHeaderProps {
    swiperRef: Swiper | null;
}

const PopularHeader: FC<IPopularHeaderProps> = ({ swiperRef }) => {
    const prevHandler = () => {
        swiperRef?.slidePrev();
    };

    const nextHandler = () => {
        swiperRef?.slideNext();
    };

    return (
        <div className="popular-header">
            <div className="popular-header__text-wrapper">
                <h2 className="popular-header__heading">
                    Популярные фильмы, которые стоит посмотреть прямо сейчас
                </h2>
                <p className="popular-header__subheading">
                    Самые просматриваемые фильмы по дням
                </p>
            </div>
            <div className="popular-header__btns-wrapper">
                <button className="popular-header__btn" onClick={prevHandler}>
                    <FaChevronLeft />
                </button>
                <button className="popular-header__btn" onClick={nextHandler}>
                    <FaChevronRight />
                </button>
            </div>
        </div>
    );
};

export default PopularHeader;
