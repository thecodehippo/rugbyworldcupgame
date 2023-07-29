import React from 'react'
import styled from "styled-components";


const Result = (props) => {

    return(
        <ResultStyle onClick={props.makePick} id={props.team}>
            {props.score}
        </ResultStyle>
    )
}


const ResultStyle = styled.div`
    width: 60px;
    background-color: #ADD8E6;
    padding: 5px 0;
    border-radius: 10px;
`

export default Result;