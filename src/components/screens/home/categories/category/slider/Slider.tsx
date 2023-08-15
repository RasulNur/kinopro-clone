import { FC } from "react";
import { Swiper as SliderComponent, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import { MovieCard } from "../../../../../ui/movie-card/MovieCard";

import "./categorySlider.scss";
import { useGetGenreMoviesQuery } from "../../../../../../store/api/moviesApi";
import Loading from "../../../../../ui/Loading/Loading";

interface ISliderProps {
    genreId: number;
}

const Slider: FC<ISliderProps> = ({ genreId }) => {
    const { data, isLoading, isSuccess } = useGetGenreMoviesQuery(
        `/v2.2/films?genres=${genreId}&order=RATING&type=ALL&ratingFrom=0&ratingTo=10&yearFrom=1000&yearTo=3000&page=1`
    );

    return (
        <div>
            {isLoading ? (
                <Loading />
            ) : isSuccess ? (
                <SliderComponent
                    loop={true}
                    spaceBetween={10}
                    navigation={true}
                    modules={[Autoplay]}
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
                        1200: {
                            slidesPerView: 4,
                            spaceBetween: 30,
                        },
                        1480: {
                            slidesPerView: 5,
                            spaceBetween: 30,
                        },
                        1580: {
                            slidesPerView: 6,
                            spaceBetween: 30,
                        },
                    }}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                    }}
                    className="slider">
                    {data?.items?.map((el) => (
                        <SwiperSlide key={el.kinopoiskId}>
                            <MovieCard movie={el} />
                        </SwiperSlide>
                    ))}
                </SliderComponent>
            ) : null}
        </div>
    );
};

export default Slider;
