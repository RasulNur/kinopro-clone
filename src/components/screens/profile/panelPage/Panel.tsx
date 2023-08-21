import { FC } from "react";
import DashboardHeader from "../../../ui/dashboardHeader/DashboardHeader";

import "./panel.scss";
const Panel: FC = () => {
    return (
        <div className="panel">
            <DashboardHeader heading="Панель" />

            <div className="container">
                <div className="panel__card">
                    <h4 className="panel__card-header">
                        ТЕКУЩАЯ ПОДПИСКА: 1 ГОД
                    </h4>

                    <div className="panel__card-main">
                        <h3 className="panel__card-main-heading">
                            СРОК ДЕЙСТВИЯ ПОДПИСКИ ИСТЕЧЕТ
                        </h3>
                        <div className="panel__card-row">
                            <div className="panel__card-time">
                                <span>117</span>дней
                            </div>
                            <div className="panel__card-time">
                                <span>23</span>часа
                            </div>
                            <div className="panel__card-time">
                                <span>28</span>минут
                            </div>
                            <div className="panel__card-time">
                                <span>10</span>секунд
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Panel;
