import { FC } from "react";
import DashboardHeader from "../../../ui/dashboardHeader/DashboardHeader";
import SubsCard from "./subsCard/SubsCard";

import "./subscriptions.scss";

export interface ITariff {
    duration: number;
    price: number;
    heading: string;
}

const Subscriptions: FC = () => {
    const tariffs: ITariff[] = [
        {
            duration: 183,
            price: 70000,
            heading: "6 месяцев",
        },
        { duration: 30, price: 13000, heading: "1 месяц" },
        {
            duration: 7,
            price: 8000,
            heading: "1 неделя",
        },
        {
            duration: 3,
            price: 5000,
            heading: "3 дня",
        },
    ];
    return (
        <div className="subs">
            <DashboardHeader heading="подписки" />

            <div className="container">
                <div className="subs__row">
                    {tariffs.map((el) => (
                        <SubsCard tariff={el} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Subscriptions;
