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
      play: false,

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
      this.setState({
        artistJohn: response.data,
        imgs: response.data.imgs,
        songs: response.data.johnSongs,
        songPLaying: response.data.johnSongs[0].url
      })
    })
    .catch(function (error) {
      console.log(error);
    });
  }
  changeSong(song){
    this.setState({
      songPLaying: song,
      play:true
    })
  }
  togglePlay(){
    if (this.state.play) {
      this.setState({ play: false });
      this.child.audio.pause();
    } else {
      this.setState({ play: true });
      this.child.audio.play();
    }
  }
  
  render() {
    return (
      <div style={{
        maxWidth: "800px",
        margin: "0 auto"
      }}>
        <Header/> 
        <Artist johnData={this.state.artistJohn} imgs={this.state.imgs} songs={this.state.songs} changeSong={this.changeSong.bind(this)} play={this.state.play} togglePlay={this.togglePlay.bind(this)}/>  
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
        <Player ref={(node) => { this.child = node; }} audio={this.state.songPLaying} play={this.state.play} togglePlay={this.togglePlay.bind(this)}/>
        </div>
      </div>
    );
  }
}

export default Layout;
