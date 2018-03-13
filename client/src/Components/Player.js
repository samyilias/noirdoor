import React from 'react';
import './Player.css';
import styled from "styled-components";


const Wrapper = styled.div`
  display: flex;
  justify-content: space-around;
`

const Handle = styled.div`
    width: 18px;
    height: 18px;
    border-radius: 50%;
    margin-top: 1px;
    background: rgba(0, 0, 0,1);
`
const Timeline = styled.div`
    width:400px;
    height: 20px;
    border-radius: 15px;
    background: rgba(0,0,0,.3);

`
const Icon = styled.div`
    cursor: pointer;
    color: #605e5e;
`
export default class Player extends React.Component {

  constructor(props) {
    super(props);
  
    this.state = { 
      duration: null,
      currentTime: null
    };
  };

  componentWillReceiveProps() {
    this.setState({ 
      play: true ,
      
    });
  };

  componentDidMount() {
    

    this.audio.addEventListener("timeupdate", () => {
      let ratio = this.audio.currentTime / this.audio.duration;
      let position = (this.timeline.offsetWidth * ratio) + this.timeline.offsetLeft;
      this.positionHandle(position);
      let duration = Math.floor(this.audio.duration);
      let currentTime = Math.floor(this.audio.currentTime);

      

      this.setState({
        duration: duration,
        currentTime: currentTime
      })
      
    });
  };

  positionHandle = (position) => {
    let timelineWidth = this.timeline.offsetWidth - this.handle.offsetWidth;
    let handleLeft = position - this.timeline.offsetLeft;
    if (handleLeft >= 0 && handleLeft <= timelineWidth) {
      this.handle.style.marginLeft = handleLeft + "px";
    }
    if (handleLeft < 0) {
      this.handle.style.marginLeft = "0px";
    }
    if (handleLeft > timelineWidth) {
      this.handle.style.marginLeft = timelineWidth + "px";
    }
  };

  mouseMove = (e) => {
    this.positionHandle(e.pageX);
    this.audio.currentTime = ((e.pageX - this.timeline.offsetLeft) / this.timeline.offsetWidth) * this.audio.duration;
    this.setState({
      currentTime:  this.audio.duration

    })
    
 };

  mouseUp = (e) => {
    window.removeEventListener('mousemove', this.mouseMove);
    window.removeEventListener('mouseup', this.mouseUp);
  };

  mouseDown = (e) => {
    window.addEventListener('mousemove', this.mouseMove);
    window.addEventListener('mouseup', this.mouseUp);
  };

  play = () => {
    if (this.state.play) {
      this.setState({ play: false });
      this.audio.pause();
    } else {
      this.setState({ play: true });
      this.audio.play();
      

    }
  };

  render() {
    console.log(this.state.currentTime/60)
    return (
    <div>
      <audio src={this.props.audio}
        ref={(audio) => { this.audio = audio }}
        autoPlay={this.props.play}
        type="audio/ogg"
      />
      <Wrapper>
      <div><span>{Math.floor(this.state.currentTime/60)}:{Math.floor(this.state.currentTime%60)}</span></div>
      <Icon
        onClick={this.props.togglePlay} 
        className="material-icons" 
      >
      {!this.props.play ? "play_arrow" : "pause"}
      </Icon>
      <div><span>{Math.floor(this.state.duration/60)|| "0"} : {Math.floor(this.state.duration%60)|| "0"}</span></div>
      
      </Wrapper>
      <Timeline  onClick={this.mouseMove} innerRef={(timeline) => { this.timeline = timeline }}>
        <Handle  onMouseDown={this.mouseDown} innerRef={(handle) => { this.handle = handle }} />
      </Timeline>
    </div>
    )
  }
}