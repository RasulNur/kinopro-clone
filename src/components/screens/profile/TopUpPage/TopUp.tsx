import { FC } from "react";
import DashboardHeader from "../../../ui/dashboardHeader/DashboardHeader";
import { Link } from "react-router-dom";

import "./topUp.scss";

const TopUp: FC = () => {
    return (
        <div className="top-up">
            <DashboardHeader heading="пополнить баланс" />

            <div className="container">
                <div className="top-up__wrapper">
                    <ul className="top-up__list">
                        <li className="top-up__list-item">
                            <Link to="#" className="top-up__links">
                                <img
                                    src="/pay-services/payme_icon.svg"
                                    alt="Payme"
                                />
                            </Link>
                        </li>
                        <li className="top-up__list-item">
                            <Link to="#" className="top-up__links">
                                <img
                                    src="/pay-services/click_icon.svg"
                                    alt="Click"
                                />
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default TopUp;
