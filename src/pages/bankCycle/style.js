import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    color: #676767;
    margin-top: 30px;
    flex-direction: column;

    div {
        margin-top: 30px;

        div {
            margin-bottom: 0px;
            display: flex;
            align-items: center;
            justify-content: space-between;


            input{
                height: 40px;
                margin-left: 40px;
                font-size: 20px;
                text-align: center;
            }
        }
    }

    #result{
        padding: 5px;
        margin-bottom: 20px;
        height: 50px;
    }
`
