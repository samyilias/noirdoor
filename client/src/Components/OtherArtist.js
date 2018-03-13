import React from "react";
import styled from "styled-components";
import {Link} from "react-router-dom";
const Img = styled.img`
    width: 200px;
    border-radius: 10px;
    margin: 10px;
`
const Title = styled.h1`
    margin: 0px;
    color: white;
`
const OtherArtist = (props)=>{
    console.log(props.activeArtist)
    const {activeArtist}= props;
    return(
        <div>
            
            <Title>You might also like {activeArtist ==="jane"? "John":"jane"}</Title>
            <Link to={activeArtist ==="jane"? "/john": "/jane"}>
            <Img src={activeArtist ==="jane"? "https://firebasestorage.googleapis.com/v0/b/noirdoor-7d63d.appspot.com/o/artists%2Fjohn%2Fme.png?alt=media&token=d03bc167-3fed-44fd-9714-39c1f9227348": "https://firebasestorage.googleapis.com/v0/b/noirdoor-7d63d.appspot.com/o/artists%2Fjane%2Fnick-karvounis-142187-unsplash-min.jpg?alt=media&token=6d5a91e7-e07a-4f91-9099-699c3db2917d"}/>
            </Link>
        </div>
    )
}
export default OtherArtist;