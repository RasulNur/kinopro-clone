import { FC } from "react";
import { ITariff } from "../Subscriptions";
import {
    PiNumberSquareSevenFill,
    PiNumberSquareSixFill,
    PiNumberSquareThreeFill,
} from "react-icons/pi";

import { FaMoon } from "react-icons/fa";
import "./subsCard.scss";

interface ISubsCardProps {
    tariff: ITariff;
}

const SubsCard: FC<ISubsCardProps> = ({ tariff }) => {
    return (
        <div className="subs-card">
            {tariff.duration === 183 ? (
                <PiNumberSquareSixFill />
            ) : tariff.duration === 30 ? (
                <FaMoon />
            ) : tariff.duration === 7 ? (
                <PiNumberSquareSevenFill />
            ) : (
                <PiNumberSquareThreeFill />
            )}

            <div className="subs-card__content">
                <span className="subs-card__duration">{tariff.heading}</span>
                <div className="subs-card__price">{tariff.price} КР</div>
                <div className="subs-card__days">
                    Подписка {tariff.duration}
                </div>
                <button className="subs-card__btn">Продлить подписку</button>
            </div>
        </div>
    );
};

export default SubsCard;
