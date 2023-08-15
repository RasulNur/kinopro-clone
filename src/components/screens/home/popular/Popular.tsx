import { FC, useState } from "react";

import "./popular.scss";
import { Slider } from "./slider/Slider";
import Swiper from "swiper";
import PopularHeader from "./header/Header";

const Popular: FC = () => {
    const [swiperRef, setSwiperRef] = useState<Swiper | null>(null);

    return (
        <section className="popular" id="popular">
            <div className="container">
                <div className="popular__wrapper">
                    <PopularHeader swiperRef={swiperRef} />
                    <Slider setSwiperRef={setSwiperRef} />
                </div>
            </div>
        </section>
    );
};

export default Popular;
