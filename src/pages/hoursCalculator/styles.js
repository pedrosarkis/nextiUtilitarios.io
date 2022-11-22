import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding-top: 30px;
    color: #898989;
`;

export const Modal = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 40vw;
    border: 1px solid lightgray;
    box-shadow: 0 0 10px lightgray;
    padding: 30px;
    margin-top: 20px;
    background: whitesmoke;

    hr {
        width: 80%;
        color: #898989;
        margin-top: 30px;
        margin-bottom: 10px;
    }

    #div-addNewButtons {
        width: 60%;
        display: flex;
        align-items: center;
        justify-content: center;
        justify-content: space-around;
    }

    #div-all-input-hours {
        margin-top: 20px;
        width: 80%;

        .div-input-hours {
            display: flex;
            align-items: center;
            justify-content: space-evenly;
            margin-bottom: 10px;
            input {
                background-color: white;
            }
        }
    }

    #div-buttons {
        margin-top: 30px;
        display: flex;
        align-items: center;
        justify-content: space-around;
        width: 70%;
    }

    #div-results {
        width: 80%;
        display: flex;
        align-items: center;
        justify-content: space-around;
        margin-top: 10px;
        input {
            background-color: ghostwhite;
        }
    }
`;
