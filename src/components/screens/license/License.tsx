import { FC } from "react";
import Heading from "../../ui/heading/Heading";

import "./license.scss";
const License: FC = () => {
    return (
        <div className="license">
            <Heading heading={"НАШИ ЛИЦЕНЗИИ"} />

            <div className="container">
                <div className="license__img-wrapper">
                    <img
                        className="license__img"
                        src="/license.png"
                        alt="Лицензия"
                    />
                    <img
                        className="license__img"
                        src="/license.png"
                        alt="Лицензия"
                    />
                    <img
                        className="license__img"
                        src="/license.png"
                        alt="Лицензия"
                    />
                </div>
            </div>
        </div>
    );
};

export default License;
