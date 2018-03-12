import React from "react";
import logo from "../logo.png";
import styled from "styled-components";
const NavBar = styled.div`
    box-shadow: 1px 1px 25px lightgrey

`
const Img = styled.img`
    width: 80px;
`
const Header = (props)=>{
    return(
        <NavBar>
            <Img src={logo}/>
        </NavBar>
    )
}
export default Header;