import React from 'react';
import styled from "styled-components";

const TopNav = (props) => {

    const navChange = (event) => {
        props.changeNav(event.target.innerText);
    }

    return (
        <NavStyle>
            <NavItemStyle onClick={navChange}>Info</NavItemStyle>
            <NavItemStyle onClick={navChange}>Picks</NavItemStyle>
            <NavItemStyle onClick={navChange}>Leaderboard</NavItemStyle>
        </NavStyle>
    )
}

export default TopNav;

const NavStyle = styled.div`
    display: flex;
    justify-content: space-around;
`

const NavItemStyle = styled.div`

`