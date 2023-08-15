import { FC } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./components/screens/home/Home";
import { Header } from "./components/ui/header/Header";
import { Footer } from "./components/ui/footer/Footer";
import ScrollTop from "./components/ui/scrollTop/ScrollTop";
// import axios from "axios";
import CategoryPage from "./components/screens/category-page/CategoryPage";
import SearchPage from "./components/screens/search-page/SearchPage";

const Router: FC = () => {
    // axios.defaults.baseURL = "https://kinopoiskapiunofficial.tech/api";

    return (
        <div>
            <div className="router">
                <Header />
                <ScrollTop />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route
                        path="/category/:categoryID"
                        element={<CategoryPage />}
                    />
                    <Route path="/search/:keyword" element={<SearchPage />} />

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
