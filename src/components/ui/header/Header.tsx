import { FC, useEffect, useRef, useState } from "react";
import "./header.scss";

import { Link, useLocation, useNavigate } from "react-router-dom";
import { AiOutlineHome } from "react-icons/ai";
import { BiExit } from "react-icons/bi";
import SearchBtn from "./searchBtn/SearchBtn";
import PopUpSearch from "./PopUpSearch/PopUpSearch";
import { setMoviesGenre } from "../../../store/movies/moviesSlice";
import { useAppDispatch } from "../../../hooks/reduxHooks";

export const Header: FC = () => {
    const location = useLocation();
    const navigate = useNavigate();

    const navMenuArr = location.pathname.includes("/dashboard")
        ? [
              "ПАНЕЛЬ",
              "ПОПОЛНИТЬ БАЛАНС",
              "ПОДПИСКИ",
              //  "ПЛАТЕЖИ",
              "ТИКЕТЫ",
          ]
        : ["Фильмы", "Сериалы", "ТВ шоу"];
    const headerRef = useRef<HTMLElement>(null);
    const panelRoutes = [
        "panel",
        "top-up",
        "subscriptions",
        // "payment",
        "tickets",
    ];

    const [searchIsActive, setSearchIsActive] = useState<boolean>(false);
    const [burgerIsActive, setBurgerIsActive] = useState<boolean>(false);
    const dispatch = useAppDispatch();

    const toggleActiveClass = () => {
        setBurgerIsActive((state) => !state);
    };
    useEffect(() => {
        burgerIsActive
            ? (document.body.style.overflowY = "hidden")
            : (document.body.style.overflowY = "scroll");
    }, [burgerIsActive]);

    const removeActiveClass = () => {
        setBurgerIsActive(false);
        document.body.style.overflowY = "scroll";
    };

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
                headerRef.current &&
                !headerRef.current.contains(event.target as Node)
            ) {
                setBurgerIsActive(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [burgerIsActive]);

    return (
        <header className="header" ref={headerRef}>
            <div className="container">
                <nav className="nav">
                    <Link
                        to="/"
                        onClick={() => setBurgerIsActive(false)}
                        className="nav__branding">
                        <img src="/logo.png" alt="Kinopro" />
                    </Link>
                    <div
                        className={`nav__menu ${
                            burgerIsActive ? "active" : ""
                        }`}>
                        <ul className="nav__list">
                            {navMenuArr.map((el, id) =>
                                location.pathname.includes("/dashboard") ? (
                                    <li
                                        className="nav__item"
                                        onClick={removeActiveClass}
                                        key={id}>
                                        <Link
                                            to={`/dashboard/${panelRoutes[id]}`}
                                            className="nav__link"
                                            onClick={() => {
                                                window.scrollTo(0, 0);
                                            }}>
                                            {el}
                                        </Link>
                                    </li>
                                ) : (
                                    <li
                                        className="nav__item"
                                        onClick={removeActiveClass}
                                        key={id}>
                                        <Link
                                            to={`/category/${id + 1}`}
                                            className="nav__link"
                                            onClick={() => {
                                                dispatch(setMoviesGenre(0));
                                                window.scrollTo(0, 0);
                                            }}>
                                            {el}
                                        </Link>
                                    </li>
                                )
                            )}
                        </ul>

                        <div className="nav__right nav__right-regular">
                            <SearchBtn setSearchIsActive={setSearchIsActive} />

                            {location.pathname.includes("/dashboard") ? (
                                <div className="nav__panel-wrpaper">
                                    <button
                                        className="nav__panel"
                                        // onClick={() => {}}
                                    >
                                        <BiExit />
                                        Выйти
                                    </button>
                                </div>
                            ) : (
                                <div className="nav__panel-wrpaper">
                                    <button
                                        className="nav__panel"
                                        onClick={() => {
                                            removeActiveClass();
                                            navigate("/dashboard/panel");
                                        }}>
                                        <AiOutlineHome />
                                        Панель
                                    </button>
                                </div>
                            )}
                        </div>
                    </div>

                    <div className="nav__right nav__right-adpative">
                        <SearchBtn setSearchIsActive={setSearchIsActive} />
                        <div
                            className={`nav__hamburger ${
                                burgerIsActive ? "active" : ""
                            }`}
                            onClick={toggleActiveClass}>
                            <span className="nav__bar"></span>
                            <span className="nav__bar"></span>
                            <span className="nav__bar"></span>
                        </div>
                    </div>

                    <PopUpSearch
                        setBurgerIsActive={setBurgerIsActive}
                        searchIsActive={searchIsActive}
                        setSearchIsActive={setSearchIsActive}
                    />
                </nav>
            </div>
        </header>
    );
};
