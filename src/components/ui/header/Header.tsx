import { FC, useEffect, useRef, useState } from "react";
import "./header.scss";

import { Link } from "react-router-dom";
import { AiOutlineHome } from "react-icons/ai";
import SearchBtn from "./searchBtn/SearchBtn";
import PopUpSearch from "./PopUpSearch/PopUpSearch";
import { setMoviesGenre } from "../../../store/movies/moviesSlice";
import { useAppDispatch } from "../../../hooks/reduxHooks";

export const Header: FC = () => {
    const categories = ["Фильмы", "Сериалы", "ТВ шоу"];
    const headerRef = useRef<HTMLElement>(null);

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
                            {categories.map((el, id) => (
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
                            ))}
                        </ul>

                        <div className="nav__right nav__right-regular">
                            <SearchBtn setSearchIsActive={setSearchIsActive} />
                            <div className="nav__panel-wrpaper">
                                <button
                                    className="nav__panel"
                                    onClick={removeActiveClass}>
                                    <AiOutlineHome />
                                    Панель
                                </button>
                            </div>
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
