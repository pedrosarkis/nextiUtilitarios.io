import React from 'react';
import styled from 'styled-components';

const Input = styled.input`
    font-size: 17px;
`

const Result = ({title, value}) => {
    return (
        <>
            <label> {title} </label>
            <Input readOnly value={value}/>
        </>
    )
}

export default Result;