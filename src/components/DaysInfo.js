import React from "react";
import styled from "styled-components";
import DailyTimeline from "./DailyTimeline";
import { convertDate, getWeeklyDay } from "../helper/utils";
import moment from "moment";
import "moment/locale/pt-br";
moment.locale("pt-br");

const Card = styled.div`
    border: 1px solid lightgray;
    box-shadow: 0 0 3px 1px lightgray;
    background-color: #797cfd;
    border-radius: 30px;
    min-width: 300px;
    height: auto;
    font-size: 20px;
    margin: 5px 10px;
    margin-top: 20px;
    color: #545454;
`;

const CardHeader = styled.div`
    display: flex;
    flex-direction: column;
    background: linear-gradient(to top, #797cfd, #9c9efe);
    border-radius: 30px 30px 0px 0px;
    color: white;
    padding: 5px 0px;

    #date {
        display: flex;
        justify-content: space-around;
        align-items: center;
        border-radius: 30px;
        padding: 3px;
        #weeklyday {
            min-width: 130px;
            display: flex;
            align-items: center;
            justify-content: center;
        }
        label {
            margin: 5px;
            padding: 5px;
            border-radius: 15px;
            padding: 5px;
        }
        label + label {
            background: white;
            color: gray;
        }
    }
`;

const CardInfo = styled.div`
    background: white;
    border-radius: 30px 30px 0px 0px;
    padding-top: 10px;
    h4 {
        color: gray;
    }

    #hours {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-top: 10px;
    }

    #infos {
        display: flex;
        flex-direction: column;
        h4 {
            margin-left: 20px;
            margin-top: 20px;
            margin-bottom: 5px;
            color: #454545;
        }

        div {
            margin-left: 40px;
            display: flex;
            justify-content: space-between;
            margin-right: 30px;

            label {
                color: black;
                weight: bold;
            }
        }
    }
`;

const CardPeriods = styled.div`
    padding-top: 30px;
    background: white;
    height: 94%;
    border-bottom: 1px solid lightgray;
    border-radius: 0px 0px 30px 30px;
    display: flex;
    flex-direction: column;
    align-items: center;

    #punchesInTolerance {
        display: flex;
        flex-direction: column;
        align-items: center;
        min-height: 60px;
        margin-bottom: 20px;
        label {
            margin-bottom: 5px;
        }
        label + label {
            text-align: center;
        }
    }
`;

const DayInfo = ({ day, timeline }) => {
    const shiftIndex = day.jornada ?? null;
    const shiftData = timeline.shifts[shiftIndex];
    const contractualHour = shiftData?.ops.HORAS_CONTRATUAIS.join(" - ") || "Não há horas previstas";

    return (
        <Card>
            <CardHeader>
                <div id="date">
                    <label>{convertDate(day.dia, "DD/MM/YYYY")}</label>
                    <label id="weeklyday">{getWeeklyDay(day.dia)}</label>
                </div>
            </CardHeader>

            <CardInfo>
                <div id="hours">
                    <label> Horário contratual </label>
                    <label> {contractualHour} </label>
                </div>
                <div id="infos">
                    <h4>Neste dia</h4>
                    <div>
                        <p>Há feriado? </p>
                        <label> {day.events.isHoliday ? "Sim" : "Não"} </label>
                    </div>
                    <div>
                        <p>Há afastamento? </p>
                        <label> {day.events.leave.range ? "Sim" : "Não"} </label>
                    </div>
                </div>
            </CardInfo>

            <CardPeriods>
                <hr style={{ width: "90%", color: "lightgray", marginBottom: 10 }} />
                <div id="punchesInTolerance">
                    <label>Batidas na tolerância</label>
                    <label> {day.punchesInTolerance.map((punch) => moment(punch.hora, "HHmm").format("HH:mm")).join(" - ")}</label>

                </div>

                {day.timeline.map((timeline, index) => (
                    <div>
                        <hr/>
                        <br />
                        <h4>Período {index + 1}</h4>
                        <DailyTimeline timeline={timeline} />
                        <br />
                    </div>
                ))}
            </CardPeriods>
        </Card>
    );
};

export default DayInfo;
