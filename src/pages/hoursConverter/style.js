import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    color: #676767;
    margin-top: 30px;
    flex-direction: column;

    div {
        margin: 20px 0px;

        div {
            margin-bottom: 30px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            width: 40vw;

            input{
                height: 40px;
                font-size: 20px;
                text-align: center;
                margin-left: 20px;
            }
            h3 {
                margin-left: 30px;

            }

            div +div {
                width: 10vw;
            }
        }
    }
`
