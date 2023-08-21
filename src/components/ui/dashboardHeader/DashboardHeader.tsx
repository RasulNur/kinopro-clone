import { FC } from "react";
import "./dashboardHeader.scss";

interface IDashboardHeaderProps {
    heading: string;
}

const DashboardHeader: FC<IDashboardHeaderProps> = ({ heading }) => {
    return (
        <div className="dashboard-header">
            <div className="container">
                <div className="dashboard-header__wrapper">
                    <h1 className="dashboard-header__heading">{heading}</h1>
                    <ul className="dashboard-header__list">
                        <li className="dashboard-header__list-item">
                            Лицевой счет:{" "}
                            <span className="dashboard-header__span">
                                45489
                            </span>
                        </li>
                        <li className="dashboard-header__list-item">
                            Баланс:{" "}
                            <span className="dashboard-header__span">0кр</span>
                        </li>
                        <li className="dashboard-header__list-item">
                            Текущая подписка:{" "}
                            <span className="dashboard-header__span">
                                1 год
                            </span>
                        </li>
                        <li className="dashboard-header__list-item">
                            Срок действия подписки истечет:{" "}
                            <span className="dashboard-header__span">
                                через 3 месяца (14-12-2023)
                            </span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default DashboardHeader;
