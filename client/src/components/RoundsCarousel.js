import styled from "styled-components";
import React from 'react';

const RoundsCarousel = (props) => {

    function createCarousel () {
        let arr = [];
        props.rounds.forEach((i) => {
            if(props.currentRound === i) {
                arr.push(<ButtonStyleActive onClick={props.changeRound} key={i}>Round {i}</ButtonStyleActive>)
            } else arr.push(<ButtonStyleInactive onClick={props.changeRound} key={i}>Round {i}</ButtonStyleInactive>)
        })
        return arr;
    }

    return (
        <CarouselStyle>
            {createCarousel()}
        </CarouselStyle>
    )

}

const CarouselStyle = styled.div`
    display: flex;
    overflow: auto;
    &::-webkit-scrollbar {
        display: none;
    }
    border-bottom: 1px solid black;
`

const ButtonStyleInactive = styled.div`
    padding: 20px 20px;
    color: #e0e0e0;
`

const ButtonStyleActive = styled.div`
    padding: 20px 20px;
    color: green;
`

export default RoundsCarousel;