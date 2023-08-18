import React from 'react';
import styled from "styled-components";

const NavItem = (props) => {

    const navChange = (event) => {
        props.changeNav(event.target.innerText);
    }

    return (
        <NavItemStyle onClick={navChange}>{props.title}</NavItemStyle>
    )
}

export default TopNav;

const NavItemStyle = styled.div`

`