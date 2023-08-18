import { FC } from "react";
import Heading from "../../ui/heading/Heading";

import "./userAgreement.scss";
const UserAgreement: FC = () => {
    const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

    return (
        <div className="agreement">
            <Heading heading="ПОЛЬЗОВАТЕЛЬСКОЕ СОГЛАШЕНИЕ" />

            <div className="container">
                <div className="agreement__paragraphs-wrapper">
                    {arr.map(() => {
                        return (
                            <div>
                                <p className="agreement__title">
                                    Lorem ipsum dolor sit amet.
                                </p>
                                <p className="agreement__paragraph">
                                    Lorem, ipsum dolor sit amet consectetur
                                    adipisicing elit. Laboriosam illum sit ex
                                    error quis obcaecati, eum at voluptatibus
                                    quia sed fuga debitis eaque minima similique
                                    aliquam perferendis odio distinctio, dolores
                                    quam autem. Harum impedit temporibus magnam,
                                    dignissimos voluptatum consequuntur
                                    voluptate reiciendis quae doloremque ex
                                    quaerat cumque, praesentium quibusdam nulla
                                    quam distinctio natus eius consectetur
                                    corrupti doloribus laborum nobis, provident
                                    veniam laudantium. Modi aut ratione
                                    accusantium, itaque harum error perferendis
                                    obcaecati optio sed placeat est, impedit
                                    recusandae, reiciendis iusto consequuntur.
                                    Earum nesciunt, officia facilis reiciendis
                                    expedita assumenda. Maiores amet dolorem
                                    nulla, accusantium voluptatibus
                                    reprehenderit debitis maxime vel beatae
                                    rerum vitae fugiat!
                                </p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default UserAgreement;
