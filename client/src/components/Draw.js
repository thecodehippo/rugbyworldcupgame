import React from 'react'
import styled from "styled-components";

const Draw = (props) => {

    return(
        <div>
        {props.pickedResult === "Draw" && props.pickedTeam === "Draw" ?
            <PickedDrawStyle onClick={props.makePick} id={props.team}>
                {props.score}
            </PickedDrawStyle>
        :
            <DrawStyle onClick={props.makePick} id={props.team}>
            {props.score}
            </DrawStyle>
        }
        </div>
        )
}

const DrawStyle = styled.div`
    width: 320px;
    background-color: #ADD8E6;
    padding: 5px 0;
    position: relative;
    left: 19.6%;
    border-radius: 10px;
`

const PickedDrawStyle = styled.div`
    width: 320px;
    background-color: red;
    padding: 5px 0;
    position: relative;
    left: 19.6%;
    border-radius: 10px;
`

export default Draw;