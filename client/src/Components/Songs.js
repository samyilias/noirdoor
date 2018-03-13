import React, { Component } from 'react';
import styled from "styled-components";

const Wrapper = styled.div`
    min-height: 60vh;
    background: #605e5e;
    overflow-y: scroll
  
`
const Title = styled.h1`
    margin: 0px;
    color: white;
`
const SongItem = styled.li`
    list-style:none;
    padding: 12px;
    margin:0px;
    color:${props=> props.active? " #ffe66b": "white"};
    margin: 5px;
    cursor: pointer;
    border-bottom: 1px solid lightgrey;
`
const SongWrapper = styled.ul`
    margin: 0px;
    padding: 0px;
`

class Songs extends Component {
  render() {
    const {songs,changeSong,songPLaying }=this.props;
    const songsMaped = songs.map((item,index)=>{
        return <SongItem active={songPLaying === item.url} key={index} onClick={()=>changeSong(item.url)}>{item.title}</SongItem>
    })
    
    
    
    return (
      <Wrapper>
          <Title>Songs</Title>
        <SongWrapper>
        {songsMaped}
        </SongWrapper>
      </Wrapper>
    );
  }
}

export default Songs;
