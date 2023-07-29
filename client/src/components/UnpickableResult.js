import React from 'react'
import styled from "styled-components";

const UnpickableResult = (props) => {

    return(
        <PickedResultStyle id={props.team}>
            {props.score}
        </PickedResultStyle>
    )
}


const PickedResultStyle = styled.div`
    width: 60px;
    background-color: grey;
    padding: 5px 0;
    border-radius: 10px;
`

export default UnpickableResult;