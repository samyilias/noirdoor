import React, { Component } from 'react';
import axios from "axios";
import Header from "./Components/Header";
import Artist from "./Components/Artist";
import Player from "./Components/Player";
import Songs from "./Components/Songs";


class Layout extends Component {
  constructor(){
    super();
    this.state={
      songPLaying: "",
      playing: false,

      artistJohn: {},
      imgs:{},
      songs: [
        {
       
          url:"",
          songName:""
        },
        {
          url:"",
          songName:""
        },

      ]
    }
  }
  componentWillMount(){
    axios.get('/users/john')
    .then((response)=> {
      console.log(response);
      this.setState({
        artistJohn: response.data,
        imgs: response.data.imgs,
        songs: response.data.johnSongs
      })
    })
    .catch(function (error) {
      console.log(error);
    });
  }
  changeSong(song){
    console.log(song)
    this.setState({
      songPLaying: song
    })
  }
  render() {
    console.log(this.state)
    return (
      <div style={{
        maxWidth: "800px",
        margin: "0 auto"
      }}>
        <Header/> 
        <Artist johnData={this.state.artistJohn} imgs={this.state.imgs} songs={this.state.songs} changeSong={this.changeSong.bind(this)} />  
        <Songs songPLaying={this.state.songPLaying} songs={this.state.songs} changeSong={this.changeSong.bind(this)}/>
        <div style={{
          position: "fixed",
          padding:"8px",
          width: "100%",
          bottom: "0px",
          display: "flex",
          justifyContent: "center",
          left: "50%",
          background: "white",
          transform: "translate(-50%)"
        }}>
        <Player audio={this.state.songPLaying} playing={this.state.playing}/>
        </div>
      </div>
    );
  }
}

export default Layout;
