import React, { useState } from "react";
import styled from "styled-components";
import DayInfo from "./DaysInfo";
import Button from "@material-ui/core/Button";

const ContainerJson = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 90vw;
    margin-top: 30px;


    #title{
        color: #656565;
        margin-bottom: 40px;
        margin-top: 10px;
    }
`;

const ContainerTimeLine = styled.div`

    #header {
        display: flex;
        justify-content: space-around;
        position: fixed;
        z-index: 1;
        left: 50%;
        transform: translateX(-50%);
        width: 100%;
        background-color: white;
        border-bottom: 1px solid lightgray;
        padding: 14px 0px;
        border-radius: 10px;
        h1 {
            display: flex;
            color: #787878;

            p {
                margin-left: 30px;
                color: black;
            }
        }
    }
`;

const ContainerDays = styled.div`
    display: flex;
    padding-top: 50px;
`;

const Timeline = () => {
    const [timeline, setTimeline] = useState({});

    const handleOnChange = (e) => {
        const { value } = e.target;
        setTimeline(JSON.parse(value));
    };

    return (
        <>
            {Object.keys(timeline).length === 0 && (
                <ContainerJson>
                    <h1 id='title'>Cole o json da timeline no campo abaixo para gerar a leitura.</h1>
                    <textarea onChange={handleOnChange} style={{marginLeft:130, padding: '20px 20px', fontSize: 20}} rows="20" cols="120" placeholder="Cole o Json da timeline aqui" />
                    <Button style={{ display: "block", marginTop: 25, width: "40vw" }} variant="contained" color="primary">
                        Parse Timeline
                    </Button>
                </ContainerJson>
            )}

            {Object.keys(timeline).length !== 0 && (
                <ContainerTimeLine>
                    <div id="header">
                        <h1>
                            Período:{" "}
                            <p>
                                {timeline.period.slice(4, 6)} / {timeline.period.slice(0, 4)}
                            </p>
                        </h1>
                        <h1>
                            Período está bloqueado?<p>{timeline.blocked ? "Sim" : "Não"}</p>
                        </h1>
                        <h1>
                            Utiliza sindicato?<p>{timeline.groupOfRules.length ? "Sim" : "Não"}</p>
                        </h1>
                    </div>

                    <ContainerDays>
                        {timeline.daysInfos.map((day) => (
                            <DayInfo day={day} timeline={timeline} />
                        ))}
                    </ContainerDays>
                </ContainerTimeLine>
            )}
        </>
    );
};

export default Timeline;
