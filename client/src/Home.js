import React from "react";
import Header from "./Components/Header";
import {Link }from "react-router-dom";
import styled from "styled-components";

const Title= styled.h1`
    margin: 0px;
    padding: 0px;
    color: black;
    font-size: 50px;
    padding: 20px;
`
const Img= styled.img`
    width: 100%;

`
const ImgWrapper= styled.div`
    width: 400px;

`
const Wrapper = styled.div`
    display: flex;
    box-shadow: 1px 1px lightgrey;



`
const Home = (props)=>{
    return(
        <div>
        <Header/>
        <Title>Discover Artists</Title>
        <Wrapper>
        <ImgWrapper>
        <Link to="/john">
        <Img src="https://firebasestorage.googleapis.com/v0/b/noirdoor-7d63d.appspot.com/o/artists%2Fjohn%2Fjohn-wallpaper.jpg?alt=media&token=92569a63-18a0-48a7-8a1a-26e7d693a62f"/>
        </Link>
        </ImgWrapper>
        <ImgWrapper>
        <Link to="/jane">
        <Img src="https://firebasestorage.googleapis.com/v0/b/noirdoor-7d63d.appspot.com/o/artists%2Fjane%2Fnick-karvounis-142187-unsplash-min.jpg?alt=media&token=6d5a91e7-e07a-4f91-9099-699c3db2917d"/>
        </Link>
        </ImgWrapper>
        </Wrapper>
        </div>
    )


}
export default Home;