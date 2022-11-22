import React from 'react';
import styled from 'styled-components';
import Button from '@material-ui/core/Button';

const Container = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    left: 60%;
    margin: auto;
    font-family: 'Lucida Sans Unicode','Lucida Grande',sans-serif;
    font-size: 13px;
    color: #757575;

    h1 {
        margin-top: 30px;
        font-size: 40px;
    }
`

const ContainerRow = styled.div`
    display: flex;
    flex-direction: row;
    margin-bottom: 20px;
    margin-top: 25px;



`

const TextAreaNoResize = styled.textarea`
    resize: none;
`

const Label = styled.label`
    font-size: 25px;
    font-weight: bold;
    margin-right: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
`

const Input = styled.input`
    max-width: 70px;
    text-align: center;
    height: 30px;
    margin-right: 20px;
    border: 1px solid #919191
`

const NightlyFactor = ({nightlyTime, setTime, calc, result, remove}) => {
    const handleOnChangeValue = ({target: {value, name}}) => {
        if(isNaN(value)) return;

        setTime(nightlyTime => ({
            ...nightlyTime,
            [name]: value
        }))
    }

    return (
        <>
        <Container>
            <h1>Calculadora de adicional noturno</h1>
            <ContainerRow>
            <Label> Horas</Label>
            <Input  name='hours' value={nightlyTime?.hours || ''} onChange={handleOnChangeValue}/>
            <Label> Minutos</Label>
            <Input name='minutes' value={nightlyTime?.minutes || ''} onChange={handleOnChangeValue} />
        </ContainerRow>
            <TextAreaNoResize
                 readOnly
                 cols='100'
                 rows='10'
                 value={
                     Object.keys(result).length ? `O resultado da operação é ${result.hours.toString().padStart(2, 0)}:${result.minutes.toString().padStart(2, 0)}` : ''
                 }
            />
            <ContainerRow>
                <Button style={{marginRight: 20}} variant="contained" color="primary" onClick={calc}>
                    Adicional Noturno
                </Button>
                <Button variant="contained" color="secondary" onClick={remove}>
                    Remover adicional noturno
                </Button>
            </ContainerRow>
        </Container>
        </>
    )
}

export default NightlyFactor;