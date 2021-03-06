import React, { Component } from 'react';
import axios from "axios";
import Header from "./Components/Header";
import Artist from "./Components/Artist";
import Player from "./Components/Player";
import Songs from "./Components/Songs";


class ArtistPage extends Component {
  constructor(){
    super();
    this.state={
      songPLaying: "",
      play: false,

      artist: {},
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
    this.fetchData();
   
  }
  fetchData(){
    const artist= this.props.match.params.id;
    axios.get(`users/${artist}`)
    .then((response)=> {
      this.setState({
        artist: response.data,
        imgs: response.data.imgs,
        songs: response.data.songs,
        songPLaying: response.data.songs[0].url
      })
    })
    .catch(function (error) {
      console.log(error);
    });

  }
  componentDidUpdate(){
    const artist= this.props.match.params.id;

    axios.get(`users/${artist}`)
    .then((response)=> {
      this.setState({
        artist: response.data,
        imgs: response.data.imgs,
        songs: response.data.songs,
        
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
        <Artist  artist={this.state.artist} imgs={this.state.imgs} songs={this.state.songs} changeSong={this.changeSong.bind(this)} play={this.state.play} togglePlay={this.togglePlay.bind(this)}/>  
        <Songs songPLaying={this.state.songPLaying} songs={this.state.songs} changeSong={this.changeSong.bind(this)} activeArtist={this.props.match.params.id}/>
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

export default ArtistPage;
