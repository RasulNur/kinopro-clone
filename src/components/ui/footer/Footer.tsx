import { FC } from "react";
import "./footer.scss";
import { Link } from "react-router-dom";

export const Footer: FC = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer__wrapper">
                    <div className="footer__top">
                        <Link to="/" className="footer__logo-link">
                            <img
                                className="footer__logo-img"
                                src="/logo.png"
                                alt="Logo"
                            />
                        </Link>

                        <ul className="footer__pay-services-list">
                            <li className="footer__pay-services-item">
                                <Link
                                    to="#"
                                    className="footer__pay-services-link">
                                    <img
                                        src="/pay-services/payme_icon.svg"
                                        alt="Payme"
                                        className="footer__pay-service-img"
                                    />
                                </Link>
                            </li>
                            <li className="footer__pay-services-item">
                                <Link
                                    to="#"
                                    className="footer__pay-services-link">
                                    <img
                                        src="/pay-services/click_icon.svg"
                                        alt="Click"
                                        className="footer__pay-service-img"
                                    />
                                </Link>
                            </li>
                            <li className="footer__pay-services-item">
                                <Link
                                    to="#"
                                    className="footer__pay-services-link">
                                    <img
                                        src="/pay-services/paynet_icon.svg"
                                        alt="Paynet"
                                        className="footer__pay-service-img"
                                    />
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div className="footer__main">
                        <p className="footer__text">
                            Все права на любые материалы, опубликованные на
                            сайте, защищены в соответствии с Узбекским и
                            международным законодательством об авторском праве и
                            смежных правах. Любое использование текстовых, фото,
                            аудио и видеоматериалов возможно только с согласия
                            правообладателя kinopro.uz
                        </p>
                        <div className="footer__categories-wrapper">
                            <h3 className="footer__categories-heading footer-heading">
                                КАТЕГОРИИ
                            </h3>

                            <ul className="footer__categories-list footer-list">
                                <li className="footer__categories-item">
                                    <Link
                                        to="#"
                                        className="footer__categories-link">
                                        Фильмы
                                    </Link>
                                </li>
                                <li className="footer__categories-item">
                                    <Link
                                        to="#"
                                        className="footer__categories-link">
                                        Сериалы
                                    </Link>
                                </li>
                                <li className="footer__categories-item">
                                    <Link
                                        to="#"
                                        className="footer__categories-link">
                                        ТВ шоу
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        <div className="footer__links-wrapper">
                            <h3 className="footer__links-heading footer-heading">
                                ССЫЛКИ
                            </h3>

                            <ul className="footer__links-list footer-list">
                                <li className="footer__links-item">
                                    <Link className="footer__links-link" to="">
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

                    <div className="footer__bottom">
                        <p className="footer__copyright">
                            2014 - {new Date().getFullYear()} ВСЕ ПРАВА
                            ЗАЩИЩЕНЫ. OOO "CLEVER IT MEDIA"
                        </p>

                        <Link to="#" className="footer__bottom-link">
                            Пользовательское соглашение
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};
