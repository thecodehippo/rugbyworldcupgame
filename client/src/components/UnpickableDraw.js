import React from 'react'
import styled from "styled-components";

const UnpickableDraw = (props) => {

    return (
        <div>
            <UnpickableDrawStyle id={props.team}>{props.score}</UnpickableDrawStyle>
        </div>
    )

}

const UnpickableDrawStyle = styled.div`
    width: 320px;
    background-color: grey;
    padding: 5px 0;
    position: relative;
    left: 19.6%;
    border-radius: 10px;
`


export default UnpickableDraw;