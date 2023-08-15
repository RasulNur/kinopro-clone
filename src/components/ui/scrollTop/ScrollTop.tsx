import { BsChevronDoubleUp } from "react-icons/bs";
import "./scrollTop.scss";
import { FC, useEffect, useState } from "react";

const ScrollTop: FC = () => {
    const [isTop, setIsTop] = useState<boolean>(false);

    useEffect(() => {
        window.onscroll = () => {
            if (window.scrollY > 400) {
                setIsTop(false);
            } else {
                setIsTop(true);
            }
        };
    }, []);

    return (
        <a
            className="scroll-top"
            href="#"
            style={{
                transform: `${isTop ? "translateY(100%)" : "translateY(0%)"}`,
                bottom: `${isTop ? "0px" : "30px"}`,
            }}>
            <BsChevronDoubleUp />
        </a>
    );
};

export default ScrollTop;
