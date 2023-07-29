import React from 'react'
import styled from "styled-components";


const PickedResult = (props) => {

    return(
        <PickedResultStyle onClick={props.makePick} id={props.team}>
            {props.score}
        </PickedResultStyle>
    )
}


const PickedResultStyle = styled.div`
    width: 60px;
    background-color: red;
    padding: 5px 0;
    border-radius: 10px;
`

export default PickedResult;