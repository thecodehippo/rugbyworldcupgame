import React, { useState } from 'react';
import styled from "styled-components";

const BottomDrawer = (props) => {
    const [alias, setAlias] = useState("");
    let numberFixtures = props.data.filter(i => i.game_week === props.currentRound);

    function handleChange(event) {
        setAlias(event.target.value);
    }

    const sendPicks = () => {
        props.sendPicks(alias);
        setTimeout(() => {
            setAlias("");
        }, 3000);
    }

    function returnButton() {
        if(!props.submittedPicks) {
            return numberFixtures.length === props.picks.length && alias !== "" ? <ReadyButtonBottomDrawerStyle onClick={sendPicks}>Submit</ReadyButtonBottomDrawerStyle> : <NotReadyButtonBottomDrawerStyle>Submit</NotReadyButtonBottomDrawerStyle>
        } else return <SubmittedButtonBottomDrawerStyle>Sent!</SubmittedButtonBottomDrawerStyle>
    }

    return (
        <VisibleBottomDrawerStyle>
            {`Selections ${props.picks.length} out of ${numberFixtures.length}`}
            <FormStyle>
                <InputStyle placeholder="Enter Alias" value={alias} type="text" onChange={handleChange} />
            </FormStyle>
            {returnButton()}
        </VisibleBottomDrawerStyle>
    )
}

const VisibleBottomDrawerStyle = styled.div`
    position: sticky;
    height: 15vh;
    background: white;
    border: 1px solid black;
    bottom: 0px;
    font-size: 2em;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
`

const ReadyButtonBottomDrawerStyle = styled.div`
    display: inline-block;
    background-color: #4299e1;
    border-radius: 50px;
    padding: 8px 16px;
    font-size: 16px;
    font-weight: 700;
    color: white;
    line-height: 26px;
    width: 50%;
`

const NotReadyButtonBottomDrawerStyle = styled.div`
    display: inline-block;
    background-color: grey;
    border-radius: 50px;
    padding: 8px 16px;
    font-size: 16px;
    font-weight: 700;
    color: white;
    line-height: 26px;
    width: 50%;
`

const SubmittedButtonBottomDrawerStyle = styled.div`
    display: inline-block;
    background-color: green;
    border-radius: 50px;
    padding: 8px 16px;
    font-size: 16px;
    font-weight: 700;
    color: white;
    line-height: 26px;
    width: 50%;
`

const FormStyle = styled.form`
    display: flex;
`

const InputStyle = styled.input`
    font-size: 0.5em;
`

export default BottomDrawer;