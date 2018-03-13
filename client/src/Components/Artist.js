import React from "react";
import styled from "styled-components";
const ArtistContainer = styled.div`
    position: relative;

`
const WallPaper  = styled.div`
    background:url(${props => props.src});
    height: 40vh;
    width: 100%;
    background-size: cover;
    background-position: center;
    text-align: center;

`
const ArtistName= styled.h1`
    margin: 0px;
    padding: 0px;
    color: white;
    font-size: 50px;
    padding: 20px;
`
const Button= styled.button`
    border-radius: 8px;
    padding: 8px 20px;
    font-size: 14px;
    color: white;
    background: ${props=> props.primary? " #ffe66b": "transparent"};
    margin: 5px;
`
const Artist = (props)=>{
    const {firstName,lastName,bio } = props.johnData;
    const{play}=props;
    return(
        <div>
        <ArtistContainer>
            <WallPaper src={props.imgs.wallpaper}>
                <ArtistName>{firstName} {lastName}</ArtistName>
                 <Button primary onClick={props.togglePlay}>{!play?"PLAY":"PAUSE"}</Button>

            </WallPaper>

        </ArtistContainer>
        </div>
    )
}
export default Artist;