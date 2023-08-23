import { FC, useState } from "react";
import { BiSupport } from "react-icons/bi";
import DashboardHeader from "../../../ui/dashboardHeader/DashboardHeader";
import { BsFillSendFill } from "react-icons/bs";
import { TiPlus } from "react-icons/ti";
import Select from "react-select";

import "./newTicket.scss";

const NewTicket: FC = () => {
    const [selectedOption, setSelectedOption] = useState(null);
    const [inputFile, setInputFile] = useState<string>("");
    const options = [
        { value: "high", label: "Высокий" },
        { value: "medium", label: "Средний" },
        { value: "low", label: "Низкий" },
    ];

    return (
        <div className="ticket">
            <DashboardHeader heading="ТИКЕТЫ СЛУЖБЫ ПОДДЕРЖКИ" />

            <div className="container">
                <div className="ticket__card">
                    <h4 className="ticket__card-header">
                        <BiSupport /> ТИКЕТЫ СЛУЖБЫ ПОДДЕРЖКИ
                    </h4>

                    <div className="ticket__card-body">
                        <div className="ticket__card-form">
                            <div className="ticket__text-inputs-row">
                                <label className="ticket__label">
                                    Имя
                                    <input
                                        type="text"
                                        className="ticket__input"
                                        placeholder="Имя"
                                    />
                                </label>
                                <label className="ticket__label">
                                    Email
                                    <input
                                        type="email"
                                        className="ticket__input"
                                        placeholder="Email"
                                    />
                                </label>
                                <label className="ticket__label">
                                    Тема
                                    <input
                                        type="text"
                                        className="ticket__input"
                                        placeholder="Тема"
                                    />
                                </label>
                                <label className="ticket__label">
                                    Приоритет
                                    <Select
                                        defaultValue={selectedOption}
                                        onChange={() => setSelectedOption}
                                        options={options}
                                        isSearchable={false}
                                        styles={{
                                            singleValue: (base) => ({
                                                ...base,
                                                color: "white",
                                            }),
                                            control: (base) => ({
                                                ...base,
                                                backgroundColor:
                                                    "rgba(255,255,255,0.1)",
                                                border: "1px solid rgba(255, 255, 255, 0.2)",
                                                boxShadow: "0",
                                                "&:hover": {
                                                    border: "1px solid rgba(255, 255, 255, 0.2)",
                                                },
                                            }),
                                            option: (
                                                styles,
                                                { isFocused }
                                            ) => ({
                                                ...styles,
                                                background: "#131722",
                                                color: isFocused
                                                    ? "#d50055"
                                                    : "white",
                                            }),
                                            menuList: (provided) => ({
                                                ...provided,
                                                paddingTop: 0,
                                                paddingBottom: 0,
                                                border: "1px solid #d50055",
                                            }),
                                        }}
                                        theme={(theme) => ({
                                            ...theme,
                                            colors: {
                                                ...theme.colors,
                                                primary: "#131722", //option bg color selected
                                                primary50: "#131722", // option bg color active(enavled or available)
                                            },
                                        })}
                                        placeholder="Выбрать"
                                    />
                                </label>
                                <label className="ticket__label ticket__textarea-label">
                                    Сообщение
                                    <textarea
                                        rows={10}
                                        className="ticket__textarea"
                                        placeholder="Сообщение"></textarea>
                                </label>
                            </div>
                            <div className="ticket__select-file">
                                <div className="ticket__select-wrapper">
                                    <label
                                        className="ticket__file-label"
                                        htmlFor="attach-file">
                                        Прикрепить
                                    </label>
                                    <input
                                        type="file"
                                        name="attach-file"
                                        id="attach-file"
                                        className="ticket__input-file"
                                        onChange={(e) =>
                                            setInputFile(e.target.value)
                                        }
                                    />
                                    <span>
                                        {inputFile.length === 0
                                            ? "Файл не выбран"
                                            : inputFile}
                                    </span>
                                </div>
                                <button className="ticket__add-input">
                                    <TiPlus />
                                </button>
                            </div>
                            <button
                                type="submit"
                                className="ticket__submit-btn">
                                <BsFillSendFill /> Отправить
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewTicket;
