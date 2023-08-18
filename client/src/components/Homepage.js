import React, { useState, useEffect } from 'react';
import { roundBuilder } from '../Utils/roundBuilder';
import RoundsCarousel from './RoundsCarousel';
import styled from "styled-components";
import Fixtures from './Fixtures';
import BottomDrawer from './BottomDrawer';
import TopNav from './TopNav';
import Info from './Info';
import Leaderboard from './Leaderboard';

const fixturesUrl = '/api/fixtures';
const currentRoundUrl = "/api/currentRound";
const submitPicksUrl = "/api/picks";

const Homepage = () => {
    const [rounds, setRounds] = useState([0]);
    const [ready, setReady] = useState(false);
    const [currentRound, setCurrentRound] = useState(1);
    const [currentRoundImmutable, setCurrentRoundImmutable] = useState()
    const [listOfPicks, setListOfPicks] = useState([]);
    const [data, setData] = useState();
    const [submittedPicks, setSubmittedPicks] = useState(false);
    const [nav, setNav] = useState("Picks");

    const addPick = (newPick) => {
        const idTeamFromPick = newPick.substring(0, newPick.indexOf(":"));

        let filteredDuplicatePicks = listOfPicks.filter((j) => {
            let idTeamFromState = j.substring(0, j.indexOf(":"));
            return idTeamFromState !== idTeamFromPick;
        });

        setListOfPicks([...filteredDuplicatePicks, newPick]);
        
    }

    function createBody(pickArr, alias) {
        return {
            alias: alias,
            round: currentRound,
            picks: pickArr
        }
    }

    async function sendPicks(alias) {
        let body = createBody(listOfPicks, alias);
        let response = await fetch(submitPicksUrl, {
            method: "POST",
            mode: "cors",
            body: JSON.stringify(body),
            headers: {
                "Content-Type": "application/json",
            },
        })
        console.log(response);
        setSubmittedPicks(true);
        setTimeout(() => {
            setSubmittedPicks(false);
        }, 3000);
    }

    const changeCurrentRound = (event) => {
        let text = event.target.innerText;
        let roundNum = text.substring(text.length - 1, text.length);
        setCurrentRound(parseInt(roundNum));
    }

    const handleNavChange = (newNav) => {
        setListOfPicks([])
        setNav(newNav);
    }

    const pageSelector = () => {
        switch(nav) {

            case "Info":
                return <Info />

            case "Leaderboard":
                return <Leaderboard />

            default:
                return (<div>
                    <RoundsCarousel currentRound={currentRound} rounds={rounds} changeRound={changeCurrentRound} currentRoundImmutable={currentRoundImmutable} /> 
                    <Fixtures data={data} listOfPicks={listOfPicks} currentRound={currentRound} addPick={addPick} currentRoundImmutable={currentRoundImmutable}   />
                </div>)
        }
    }

    useEffect(() => {
        async function createGame() {
            try {
                const fixturesResponse = await fetch(fixturesUrl);
                const fixturesResult = await fixturesResponse.json();
                setData(fixturesResult.data);

                const currentRoundResponse = await fetch(currentRoundUrl);
                const currentRoundResult = await currentRoundResponse.json();
                setCurrentRound(currentRoundResult);
                setCurrentRoundImmutable(currentRoundResult);

                setRounds(roundBuilder(fixturesResult.data));

            } catch (error) {
                console.error(error);
            }
        }
        createGame().then(() => setReady(true))
     }, []);

    return (
        <CanvasStyle>
            <TopNav changeNav={handleNavChange} navItem={nav} />

            {ready ?
                pageSelector() :
                "Loading"
            }

            {listOfPicks.length > 0 ? <BottomDrawer submittedPicks={submittedPicks} sendPicks={sendPicks} picks={listOfPicks} data={data.results} currentRound={currentRound} /> : null}
            
        </CanvasStyle>
    )
}

export default Homepage;

const CanvasStyle = styled.div`
    border: 1px solid black;
    max-width: 500px;
    width: 100vw;
    margin: auto;
`