import Button from "@material-ui/core/Button";
import React, { useState } from "react";
import InputMask from "react-input-mask";
import { removeUnderline, secondsToHoursAndMinutes } from "../../helper/calculator";
import { Container } from "./style.js";

const MultiplyingFactor = () => {
    const [bancoDeHoras, setBancoDeHoras] = useState();
    const [fator, setFator] = useState();
    const [result, setResult] = useState();

    const hoursToSeconds = ([hour, minutes]) => parseInt(hour) * 3600 + parseInt(minutes) * 60;

    const factorMinutes = (seconds) => removeUnderline(fator) * seconds;

    const handleClick = () => {
        if (!bancoDeHoras || !fator) return false;

        const seconds = hoursToSeconds(removeUnderline(bancoDeHoras).split(":"));
        const hoursAndMinutes = secondsToHoursAndMinutes(factorMinutes(seconds));
        setResult(hoursAndMinutes);
    };

    return (
        <Container>
            <h1>Fator Multiplicador</h1>
            <div>
                <div>
                    <h3>Quantidade de Banco</h3>
                    <InputMask onChange={(e) => setBancoDeHoras(e.target.value)} mask="99:99"></InputMask>
                </div>
                <div>
                    <h3>Fator Multiplicador </h3>
                    <InputMask onChange={(e) => setFator(e.target.value)} mask="9.9"></InputMask>
                </div>
            </div>
            <div id="result">{result && <h1>Resultado: {result}</h1>}</div>
            <Button onClick={handleClick} variant="contained" color="primary" style={{ marginBottom: 50 }}>
                Multiplicar
            </Button>
            <p>*Multiplique o banco pelo fator multiplicador</p>
        </Container>
    );
};

export default MultiplyingFactor;