import {
    Dispatch,
    FC,
    KeyboardEventHandler,
    SetStateAction,
    useState,
} from "react";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

interface ISearchProps {
    searchIsActive: boolean;
    setSearchIsActive: Dispatch<SetStateAction<boolean>>;
    setBurgerIsActive: Dispatch<SetStateAction<boolean>>;
}

const PopUpSearch: FC<ISearchProps> = ({
    searchIsActive,
    setSearchIsActive,
    setBurgerIsActive,
}) => {
    const [search, setSearch] = useState<string>("");
    const navigate = useNavigate();

    const handleSearch = () => {
        setSearchIsActive(false);
        setBurgerIsActive(false);
        navigate(`/search/${search}`);
        window.scrollTo(0, 0);
    };

    const handleKeyDown: KeyboardEventHandler<HTMLInputElement> = (e) => {
        if (e.code === "Enter") {
            setSearchIsActive(false);
            handleSearch();
        }
    };

    return (
        <div
            className={`nav__search-input-wrapper nav-search ${
                searchIsActive ? "active" : ""
            }`}>
            <input
                className={`nav-search__input ${
                    searchIsActive ? "active" : ""
                }`}
                onKeyDown={(e) => handleKeyDown(e)}
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                type="text"
                placeholder="Искать..."
            />
            <button
                className={`nav-search__btn ${searchIsActive ? "active" : ""}`}
                onClick={handleSearch}>
                <FaSearch />
            </button>
        </div>
    );
};

export default PopUpSearch;
