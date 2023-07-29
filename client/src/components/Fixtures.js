import React from 'react';
import Fixture from './Fixture';
import styled from "styled-components";

const Fixtures = (props) => {

    function createFixtures() {
        let arr = [];
        props.data.results.forEach((i) => {
            const findFixturePick = props.listOfPicks.filter(j => {
                return parseInt(j.substring(0, j.indexOf(":"))) === i.id
            });
            if(i.game_week === props.currentRound && i.game_week === props.currentRoundImmutable) {
                arr.push(<Fixture fixturePick={findFixturePick} listOfPicks={props.listOfPicks} key={i.id} fixture={i} addPick={props.addPick} currentRound={true} />)
            } else if (i.game_week === props.currentRound) {
                arr.push(<Fixture fixturePick={findFixturePick} listOfPicks={props.listOfPicks} key={i.id} fixture={i} addPick={props.addPick} currentRound={false} />)
            }
        })
        return arr;
    }

    return (
        <FixturesStyle>
            {createFixtures()}
        </FixturesStyle>
    )
}

const FixturesStyle = styled.div`

`

export default Fixtures;