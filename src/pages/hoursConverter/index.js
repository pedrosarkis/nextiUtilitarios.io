import React, { useState } from "react";
import InputMask from "react-input-mask";
import { converterToCentesimal, converterToSexagesimal } from "../../helper/calculator";
import { Container } from "./style.js";

const HoursConverter = () => {
    const [sexagesimal, setSexagesimal] = useState("00:00");
    const [centesimal, setCentesimal] = useState("0.00");

    const handleChangeSexagesimal = (e) => setSexagesimal(converterToCentesimal(e.target.value));
    const handleChangeCentesimal = (e) => setCentesimal(converterToSexagesimal(e.target.value));

    return (
        <Container>
            <h1>Conversor de Horas</h1>
            <div>
                <div>
                    <div>
                        <h2>Valor em Sexagesimal </h2>
                        <InputMask onChange={(e) => handleChangeSexagesimal(e)} mask="99:99"></InputMask>
                    </div>
                    <div>
                        <h3>{sexagesimal}</h3>
                    </div>
                </div>
                <div>
                    <div>
                        <h2>Valor em Cetesimal </h2>
                        <InputMask onChange={(e) => handleChangeCentesimal(e)} mask="99.99"></InputMask>
                    </div>
                    <div>
                        <h3>{centesimal}</h3>
                    </div>
                </div>
            </div>
            <p>*Converta horas de sexagesimal para centesimal e vice versa</p>
        </Container>
    );
};

export default HoursConverter;
