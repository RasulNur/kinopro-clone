import { FC } from "react";
import { FaTelegram } from "react-icons/fa";
import "./telegram.scss";
import { Link } from "react-router-dom";

const Telegram: FC = () => {
    return (
        <section className="telegram-section">
            <div className="container">
                <div className="telegram-section__wrapper">
                    <span className="telegram-section__span">
                        только на Kinopro
                    </span>
                    <h1 className="telegram-section__heading">
                        ЛУЧШИЕ ПРЕМЬЕРЫ МИРОВОГО КИНОПРОКАТА
                    </h1>
                    <Link to="#" className="telegram-section__link">
                        <FaTelegram /> Будь в курсе всех новостей
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default Telegram;
