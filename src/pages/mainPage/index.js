import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { reset, calcNightlyFactor, removeNightlyFactor } from "../../helper/calculator";

//components
import Nightly from "../../components/Nightly";
import HourCalculator from "../../components/HourCalculator";

//pages
import CicleBank from "../../pages/bankCycle"
import HoursConverter from "../../pages/hoursConverter";
import MultiplyingFactor from "../../pages/multiplyingFactor";
import HoursCalculator from "../../pages/hoursCalculator";

const useStyles = makeStyles({
    root: {
        flexGrow: 1,
    },
});

const IndexPage = () => {
    const [value, setValue] = useState(0);
    const [nightlyTime, setNightlyTime] = useState({});
    const [resultNightly, setResultNightly] = useState({});

    const calcNightly = () => {
        const nightlyResult = calcNightlyFactor(nightlyTime);
        setResultNightly(nightlyResult);
    };

    const calcRemoveNightlyFactor = () => {
        const resultRemoval = removeNightlyFactor(nightlyTime);
        setResultNightly(resultRemoval);
    };

    const tabChooser = {
        0: <HoursCalculator />,
        1: <Nightly nightlyTime={nightlyTime} setTime={setNightlyTime} result={resultNightly} calc={calcNightly} remove={calcRemoveNightlyFactor} />,
        2: <HoursConverter />,
        3: <MultiplyingFactor />,
    };

    const classes = useStyles();
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return (
        <>
            <Paper className={classes.root} style={{ position: "fixed", width: "100vw", zIndex: 1 }}>
                <Tabs value={value} onChange={handleChange} indicatorColor="primary" textColor="primary" centered>
                    <Tab label="Calculadora" />
                    <Tab label="Adicional Noturno" />
                    <Tab label="Conversor" />
                    <Tab label="Fator Multiplicador" />
                </Tabs>
            </Paper>
            <div style={{ paddingTop: 49 }}>{tabChooser[value]}</div>
        </>
    );
};

export default IndexPage;
