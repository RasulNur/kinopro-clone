import { FC, useEffect } from "react";
import "./home.scss";
import Telegram from "./telegram/Telegram";
import Popular from "./popular/Popular";
import Categories from "./categories/Categories";

const Home: FC = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <main className="home">
            <Telegram />
            <Popular />
            <Categories />
        </main>
    );
};

export default Home;
