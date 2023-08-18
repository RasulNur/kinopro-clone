import { FC } from "react";
import "./heading.scss";
import { FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";

interface IHeadingProps {
    heading?: string;
}

const Heading: FC<IHeadingProps> = ({ heading }) => {
    return (
        <div className="heading">
            <div className="heading__wrapper">
                <h1 className="heading__caption">{heading}</h1>
                <div className="heading__breadcrumb">
                    <Link to="/" className="heading__link">
                        <FaHome />
                        ГЛАВНАЯ
                    </Link>
                    <span className="heading__dash">-</span>
                    <span className="heading__span">{heading}</span>
                </div>
            </div>
        </div>
    );
};

export default Heading;
