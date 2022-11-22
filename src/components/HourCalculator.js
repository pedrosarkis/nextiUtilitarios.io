import Button from "@material-ui/core/Button";
import React from "react";
import { Container, ContainerHour, InputHour, InputHourResult, Modal } from "./hourCalculatorStyles";

const Calculator = ({ handleTime, timeState, setOperation, doCalc, result, setAutoSave }) => {
    const handleOnChange = ({target: {name, value}}) => {
        handleTime((timeState) => ({
            ...timeState,
            [name]: value,
        }));
    };

    const handleOnChangeAutoSave = ({target: {checked}}) => {
        setAutoSave(checked);
    };

    const handleOnclick = event => doCalc(event);

    return (
        <Container>
            <h1>Calculadora de horas</h1>
            <Modal>
                <ContainerHour>
                    <InputHour onChange={handleOnChange} name="hour1" type="text" value={timeState?.hour1 ?? ""} />
                    <label for="hours">Horas</label>
                    <InputHour onChange={handleOnChange} name="minute1" value={timeState?.minute1 ?? ""} />
                    <label for="mins">Minutos</label>
                </ContainerHour>
                <ContainerHour>
                    <InputHour onChange={handleOnChange} name="hour2" value={timeState?.hour2 ?? ""} />
                    <label for="hours">Horas</label>
                    <InputHour onChange={handleOnChange} name="minute2" value={timeState?.minute2 ?? ""} />
                    <label for="mins">Minutos</label>
                </ContainerHour>
                <ContainerHour>
                    <Button onClick={() => handleOnclick("sum")} style={{ marginRight: 30 }} variant="contained" color="primary">
                        Adição
                    </Button>
                    <Button onClick={() => handleOnclick("reset")} style={{ marginRight: 30 }} variant="contained" color="secondary">
                        Reset
                    </Button>
                    <Button onClick={() => handleOnclick("decrease")} style={{ marginRight: 40 }} variant="contained" color="primary">
                        Subtração
                    </Button>
                </ContainerHour>
                <hr />
                <ContainerHour>
                    <InputHourResult id="resultHour" value={result?.hours ?? ""} type="text" readonly maxlength="2" />
                    <label for="hours">Horas</label>
                    <InputHourResult id="resultMinute" value={result?.minutes ?? ""} type="text" readonly maxlength="2" />
                    <label for="mins">Minutos</label>
                </ContainerHour>
                <ContainerHour>
                    <input id="auto" onChange={handleOnChangeAutoSave} type="checkbox" />
                    <label style={{ fontSize: "20px", color: "black", marginLeft: 10 }} for="auto" class="results">
                        Salvar operação
                    </label>
                </ContainerHour>
            </Modal>
        </Container>
    );
};

export default Calculator;
