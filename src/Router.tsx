import { FC } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./components/screens/home/Home";
import { Header } from "./components/ui/header/Header";
import { Footer } from "./components/ui/footer/Footer";
import ScrollTop from "./components/ui/scrollTop/ScrollTop";

import CategoryPage from "./components/screens/categoryPage/CategoryPage";
import SearchPage from "./components/screens/searchPage/SearchPage";
import License from "./components/screens/license/License";
import UserAgreement from "./components/screens/userAgreement/UserAgreement";
import MoviePage from "./components/screens/moviePage/MoviePage";

const Router: FC = () => {
    return (
        <div>
            <div className="router">
                <Header />
                <ScrollTop />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/movie/:movieId" element={<MoviePage />} />

                    <Route
                        path="/category/:categoryID"
                        element={<CategoryPage />}
                    />
                    <Route path="/search/:keyword" element={<SearchPage />} />

                    <Route path="/license" element={<License />} />
                    <Route path="/user-agreement" element={<UserAgreement />} />

                    <Route
                        path="*"
                        element={<Navigate to="/" replace={true} />}
                    />
                </Routes>

                <Footer />
            </div>
        </div>
    );
};

export default Router;
