import { Swiper as SliderComponent, SwiperSlide } from "swiper/react";
import Swiper from "swiper";
import { FC } from "react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import "./popularSlider.scss";
import { MovieCard } from "../../../../ui/movieCard/MovieCard";

import { useGetMoviesQuery } from "../../../../../store/api/moviesApi";
import Loading from "../../../../ui/loading/Loading";

interface ISliderProps {
    setSwiperRef: (name: Swiper) => void;
}

export const Slider: FC<ISliderProps> = ({ setSwiperRef }) => {
    const { data, isLoading } = useGetMoviesQuery(
        "/v2.2/films?order=NUM_VOTE&type=FILM&ratingFrom=8&ratingTo=10&yearFrom=1000&yearTo=3000&page=1"
    );

    if (isLoading)
        return (
            <div className="popular-slider-wrapper">
                <Loading />
            </div>
        );
    else
        return (
            <SliderComponent
                loop={true}
                spaceBetween={10}
                navigation={true}
                modules={[Navigation, Autoplay]}
                breakpoints={{
                    320: {
                        slidesPerView: 2,
                        spaceBetween: 10,
                    },
                    460: {
                        slidesPerView: 2,
                        spaceBetween: 30,
                    },
                    767: {
                        slidesPerView: 3,
                        spaceBetween: 30,
                    },
                    992: {
                        slidesPerView: 2,
                        spaceBetween: 30,
                    },
                    1200: {
                        slidesPerView: 3,
                        spaceBetween: 30,
                    },
                    1480: {
                        slidesPerView: 4,
                        spaceBetween: 30,
                    },
                    1580: {
                        slidesPerView: 5,
                        spaceBetween: 30,
                    },
                }}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                className="popular-slider"
                onSwiper={(swiper) => {
                    setSwiperRef(swiper);
                }}>
                {data?.items.map((el) => (
                    <SwiperSlide key={el.kinopoiskId}>
                        <MovieCard movie={el} />
                    </SwiperSlide>
                ))}
            </SliderComponent>
        );
};
