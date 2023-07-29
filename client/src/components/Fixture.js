import React from 'react';
import styled from "styled-components";
import Result from './Result';
import PickedResult from './PickedResult';
import UnpickableResult from './UnpickableResult';
import UnpickableDraw from './UnpickableDraw';
import Draw from './Draw';
import { supportedScores } from '../config/config';

const Fixture = (props) => {

    function makePick(event) {
        props.addPick(`${props.fixture.id}:${event.target.id}:${event.target.innerText}`);
    }

    function parseExistingPick() {
        let featurePickText = props.fixturePick[0];
        let pickedTeam = "";
        let pickedScore = "";
        if(props.fixturePick.length > 0) {
            pickedTeam = featurePickText.substring(featurePickText.indexOf(":") +1, featurePickText.lastIndexOf(":"));
            pickedScore = featurePickText.substring(featurePickText.lastIndexOf(":") +1, featurePickText.length);  
        } 
        return { pickedTeam, pickedScore }
    }

    function buildPicks(homeAway) {
        const { pickedTeam, pickedScore } = parseExistingPick();
        let arr = [];
        if(homeAway !== "draw") {
            supportedScores.forEach(s => {
            arr.push(returnPickStyle(s, homeAway, pickedTeam, pickedScore));
        })} else {
            arr.push(returnPickStyle("draw", homeAway, pickedTeam, pickedScore));
        }
        return arr;
    }

    function returnPickStyle(score, homeAway, pickedTeam, pickedScore) {
        switch(homeAway) {
            case "home":
                if(props.currentRound) {
                    return props.fixture.home === pickedTeam && pickedScore === score ? <PickedResult key={`${homeAway}-${score}`} score={score} makePick={makePick} team={props.fixture.home} /> : <Result key={`${homeAway}-${score}`} score={score} makePick={makePick} team={props.fixture.home} />
                } else return <UnpickableResult key={`${homeAway}-${score}`} score={score} makePick={makePick} team={props.fixture.home} />
            
            case "away":
                if(props.currentRound) {
                    return props.fixture.away === pickedTeam && pickedScore === score ? <PickedResult key={`${homeAway}-${score}`} score={score} makePick={makePick} team={props.fixture.away} /> : <Result key={`${homeAway}-${score}`} score={score} makePick={makePick} team={props.fixture.away} />
                } else return <UnpickableResult key={`${homeAway}-${score}`} score={score} makePick={makePick} team={props.fixture.away} />

            case "draw":
                if(props.currentRound) {
                    return <Draw key={`${homeAway}-${score}`} score={"Draw"} makePick={makePick} team="Draw" pickedResult={pickedScore} pickedTeam={pickedTeam} />
                } else return <UnpickableDraw key={`${homeAway}-${score}`} score={"Draw"} makePick={makePick} team="Draw" pickedResult={pickedScore} pickedTeam={pickedTeam} />

            default: return;
        }

    }

    return(
        <FixtureStyle>
            <PickStyle>
                <TeamStyle>
                {props.fixture.home}
                </TeamStyle>
                {buildPicks("home")}
           </PickStyle>
            <PickStyle>
                {buildPicks("draw")}
            </PickStyle>
            <PickStyle>
                <TeamStyle>
                {props.fixture.away}
                </TeamStyle>
                {buildPicks("away")}
            </PickStyle>
        </FixtureStyle>
    )

}

const FixtureStyle = styled.div`
    border-bottom: 1px solid black;
`
const PickStyle = styled.div`
    display: flex;
    justify-content: space-evenly;
    margin: 10px 0px;
`

const TeamStyle = styled.div`
    width: 100px;
    padding: 5px 0;
`

export default Fixture;

/*
    return(
        <FixtureStyle>
            <PickStyle>
                <TeamStyle>
                {props.fixture.home}
                </TeamStyle>
                {buildPicks()}
                {props.fixture.home === team && pick === "1-10" ? <PickedResult score={"1-10"} makePick={makePick} team={props.fixture.home} /> : <Result score={"1-10"} makePick={makePick} team={props.fixture.home} />}
                {props.fixture.home === team && pick === "11-20" ? <PickedResult score={"11-20"} makePick={makePick} team={props.fixture.home} /> : <Result score={"11-20"} makePick={makePick} team={props.fixture.home} />}
                {props.fixture.home === team && pick === "21-30" ? <PickedResult score={"21-30"} makePick={makePick} team={props.fixture.home} /> : <Result score={"21-30"} makePick={makePick} team={props.fixture.home} />}
                {props.fixture.home === team && pick === "31+" ? <PickedResult score={"31+"} makePick={makePick} team={props.fixture.home} /> : <Result score={"31+"} makePick={makePick} team={props.fixture.home} />}
            </PickStyle>
            <PickStyle>
            <Draw score={"Draw"} makePick={makePick} team="Draw" pickedResult={pick} pickedTeam={team} />
            </PickStyle>
            <PickStyle>
                <TeamStyle>
                {props.fixture.away}
                </TeamStyle>
                {props.fixture.away === team && pick === "1-10" ? <PickedResult score={"1-10"} makePick={makePick} team={props.fixture.away} /> : <Result score={"1-10"} makePick={makePick} team={props.fixture.away} />}
                {props.fixture.away === team && pick === "11-20" ? <PickedResult score={"11-20"} makePick={makePick} team={props.fixture.away} /> : <Result score={"11-20"} makePick={makePick} team={props.fixture.away} />}
                {props.fixture.away === team && pick === "21-30" ? <PickedResult score={"21-30"} makePick={makePick} team={props.fixture.away} /> : <Result score={"21-30"} makePick={makePick} team={props.fixture.away} />}
                {props.fixture.away === team && pick === "31+" ? <PickedResult score={"31+"} makePick={makePick} team={props.fixture.away} /> : <Result score={"31+"} makePick={makePick} team={props.fixture.away} />}
            </PickStyle>
        </FixtureStyle>
    )

    */