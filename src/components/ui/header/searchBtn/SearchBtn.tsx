import { FC, Dispatch, SetStateAction } from "react";
import { FaSearch } from "react-icons/fa";

interface IBtnProps {
    setSearchIsActive: Dispatch<SetStateAction<boolean>>;
}

const SearchBtn: FC<IBtnProps> = ({ setSearchIsActive }) => {
    const showSearch = () => {
        setSearchIsActive((state) => !state);
    };

    return (
        <button className="nav__search-btn" onClick={() => showSearch()}>
            <FaSearch />
        </button>
    );
};

export default SearchBtn;
