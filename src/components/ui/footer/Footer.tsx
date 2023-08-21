import { FC } from "react";
import "./footer.scss";
import { Link, useLocation } from "react-router-dom";
import { useAppDispatch } from "../../../hooks/reduxHooks";
import { setMoviesGenre } from "../../../store/movies/moviesSlice";

export const Footer: FC = () => {
    const categories = ["Фильмы", "Сериалы", "ТВ шоу"];
    const dispatch = useAppDispatch();
    const location = useLocation();

    return (
        <footer className="footer">
            <div className="container">
                <div className="footer__wrapper">
                    {location.pathname.includes("/dashboard") ? null : (
                        <div className="footer__top">
                            <Link
                                to="/"
                                className="footer__logo-link"
                                onClick={() => {
                                    window.scrollTo(0, 0);
                                }}>
                                <img
                                    className="footer__logo-img"
                                    src="/logo.png"
                                    alt="Logo"
                                />
                            </Link>

                            <ul className="footer__pay-services-list">
                                <li className="footer__pay-services-item">
                                    <img
                                        src="/pay-services/payme_icon.svg"
                                        alt="Payme"
                                        className="footer__pay-service-img"
                                    />
                                </li>
                                <li className="footer__pay-services-item">
                                    <img
                                        src="/pay-services/click_icon.svg"
                                        alt="Click"
                                        className="footer__pay-service-img"
                                    />
                                </li>
                                <li className="footer__pay-services-item">
                                    <img
                                        src="/pay-services/paynet_icon.svg"
                                        alt="Paynet"
                                        className="footer__pay-service-img"
                                    />
                                </li>
                            </ul>
                        </div>
                    )}
                    {location.pathname.includes("/dashboard") ? null : (
                        <div className="footer__main">
                            <p className="footer__text">
                                Все права на любые материалы, опубликованные на
                                сайте, защищены в соответствии с Узбекским и
                                международным законодательством об авторском
                                праве и смежных правах. Любое использование
                                текстовых, фото, аудио и видеоматериалов
                                возможно только с согласия правообладателя
                                kinopro.uz
                            </p>
                            <div className="footer__categories-wrapper">
                                <h3 className="footer__categories-heading footer-heading">
                                    КАТЕГОРИИ
                                </h3>

                                <ul className="footer__categories-list footer-list">
                                    {categories.map((el, id) => (
                                        <li
                                            className="footer__categories-item"
                                            // onClick={removeActiveClass}
                                            key={id}>
                                            <Link
                                                to={`/category/${id + 1}`}
                                                className="footer__categories-link"
                                                onClick={() => {
                                                    dispatch(setMoviesGenre(0));
                                                    window.scrollTo(0, 0);
                                                }}>
                                                {el}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="footer__links-wrapper">
                                <h3 className="footer__links-heading footer-heading">
                                    ССЫЛКИ
                                </h3>

                                <ul className="footer__links-list footer-list">
                                    <li className="footer__links-item">
                                        <Link
                                            className="footer__links-link"
                                            to="/license"
                                            onClick={() => {
                                                window.scrollTo(0, 0);
                                            }}>
                                            Наши лицензии
                                        </Link>
                                    </li>
                                </ul>
                            </div>

                            <div className="footer__download-wrapper">
                                <h3 className="footer__download-heading footer-heading">
                                    Возьмите kinopro с собой
                                </h3>

                                <ul className="footer__downlaod-links-list">
                                    <li className="footer__download-links-item">
                                        <Link
                                            to="#"
                                            className="footer__download-links">
                                            <img
                                                className="footer__download-img"
                                                src="/app-stores/appstore.png"
                                                alt="Appstore"
                                            />
                                        </Link>
                                    </li>
                                    <li className="footer__download-links-item">
                                        <Link
                                            to="#"
                                            className="footer__download-links">
                                            <img
                                                className="footer__download-img"
                                                src="/app-stores/playmarket.png"
                                                alt="Playmarket"
                                            />
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    )}

                    <div className="footer__bottom">
                        <p className="footer__copyright">
                            2014 - {new Date().getFullYear()} ВСЕ ПРАВА
                            ЗАЩИЩЕНЫ. OOO "CLEVER IT MEDIA"
                        </p>

                        <Link
                            to="/user-agreement"
                            className="footer__bottom-link"
                            onClick={() => {
                                window.scrollTo(0, 0);
                            }}>
                            Пользовательское соглашение
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};
