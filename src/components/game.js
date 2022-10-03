import { Button, Card } from '@mui/material';
import axios from 'axios';
import React from 'react';
import Image1 from '../assests/images/image_1.jpg';
import Image2 from '../assests/images/image_2.jpg';
import URL from '../url.json';
import { withSnackbar } from '../shared/snackbar';
import { useNavigate } from 'react-router-dom';
import Pointer from '../assests/images/pointer.jpg';
import Audio from '../assests/audio/lionroar.mp3';
import Sheep1 from '../assests/images/sheep_1.jpg';
import Goat_1 from '../assests/images/goat.jpg';
import Sheep2 from '../assests/images/sheep_2.jpg';
import Sheep3 from '../assests/images/sheep_3.jpg';
import Goat_2 from "../assests/images/goat_2.jpg";

class Game extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            time: {}, 
            seconds: 20,
            initalTimer: 20,
            count : 0,
            images : [{image_1 : Image1 , count : 1}],
            images_second : [{image_1 : Image2, count : 10}],
            image_array : [
              {key : 1,value : Sheep1}, 
              {key : 2,value : Sheep2},
              {key : 3,value : Goat_1},
              {key : 4,value : Sheep1},
              {key : 5,value : Sheep1},
              {key : 6,value : Sheep3},
              {key : 7,value : Goat_2},
              {key : 8,value : Sheep3},
              {key : 9,value : Sheep2},
              {key : 10,value : Goat_2},
              {key : 11,value : Goat_1},
              {key : 12,value : Sheep2},
              {key : 13,value : Sheep1},
              {key : 14,value : Goat_1},
              {key : 15,value : Sheep3}
            ]
       
        }
        this.timer = 0;
        this.startTimer = this.startTimer.bind(this);
        this.countDown = this.countDown.bind(this);
    }

    secondsToTime(secs) {
        let divisor_for_minutes = secs % (60 * 60);
    
        let divisor_for_seconds = divisor_for_minutes % 60;
        let seconds = Math.ceil(divisor_for_seconds);
    
        let obj = {
          "s": seconds
        };
        return obj;
      }

      startTimer() {
        let timeLeftVar = this.secondsToTime(this.state.initalTimer);
        this.setState({ seconds: this.state.initalTimer, time: timeLeftVar });
    
        if (this.timer === 0 && this.state.seconds > 0) {
          this.timer = setInterval(this.countDown, 1000);
        }
      }
  componentDidMount() {
    let timeLeftVar = this.secondsToTime(this.state.seconds);
    this.setState({ time: timeLeftVar });
    this.startTimer();
    this.mousePointer();
   
  }
  componentDidUpdate(){
    // if(this.state.time.s == 0)
    // {
    //     this.props.navigate("/dashboard");
    // }
  }

  mousePointer = () => {

    const el = (sel, par) => (par||document).querySelector(sel);

    const elArea  = el("#area");
    const elPopup = el("#popup");
    
    const showPopup = (evt) => {
      Object.assign(elPopup.style, {
        left: `${evt.clientX}px`,
        top: `${evt.clientY}px`,
        display: `block`,
      });
    };
    
    elArea.addEventListener("click", showPopup);
  }

  countDown() {
    // Remove one second, set state so a re-render happens.
    let seconds = this.state.seconds - 1;
    this.setState({
      time: this.secondsToTime(seconds),
      seconds: seconds,
    });
    
    // Check if we're at zero.
    if (seconds == 0) { 
      clearInterval(this.timer);
    }
  }

  // exit = () => {
  //   this.props.navigate("/dashboard");
  // }

    countscore = (key, value) => {
        debugger;
        const array = [3,7,10,11,14];
        if(array.includes(key))
        {
          this.props.navigate("/dashboard");
        }
        var audio = document.getElementById("audio");
        audio.play();
       let count =this.state.count + 1;
      var remove_image =  this.state.image_array.filter(image => {
                            return image.key != key
                        })
        this.setState({image_array : remove_image})
        if(count == (15 - array.length))
        {
            axios.post(URL.Endpoints.ADD_SCORE,{
                userid : localStorage.getItem("userid"),
                score : count
            }).then(data =>
                {
                    this.props.snackbarShowMessage(`Your score is ` + count , `success`);
                    this.state.images.filter(image => {
                        return image.image_1
                    })
                    this.startTimer();
                  
                    if(count == 10)
                    {
                      alert("game over");
                        setTimeout(() => {
                            this.props.navigate("/dashboard");
                          }, 2000);
                    }
                    this.setState({images : this.state.images_second, count : 0})
                 
                }
                )
        
    }
        this.setState({
            count : count
        })
    }

    render(){
 
        return(
            <>
            <p style={{color:'antiquewhite', marginTop:'5%', fontSize:'30px', fontFamily : 'inherit' , textAlign : 'center'}}>  {this.state.time.s}</p>
            <Card sx={{  justifyContent: 'center', marginRight:'3%', marginLeft:'3%', height : '390px' }}> 
            {/* <img src={Sheep1} onClick={this.count} height='100%' width="50%" ></img>
            <img src={Sheep1} onClick={this.count} height='100%' width="100%" ></img> */}
                {/* {this.state.images.map((image) => {
                     return <><span id="area"><img src={image.image_1}  height='100%' width="100%" onClick={this.count}></img></span><div id="popup"><img src={Pointer} width="20px" height="20px" style={{borderRadius : '40px'}}/></div></>
                })

                } */}

              {this.state.image_array.map((image) => {
                  return(
                    <>
                 <span id="area"><img src={image.value}  height='30%' width="20%" onClick={(event) => this.countscore(image.key, image.value)}></img></span>
                   <div id="popup"><img src={Pointer} width="20px" height="20px" style={{borderRadius : '40px'}}/> 
                   </div> 
                   </>
                  )
              })}
                       <br/>
        
        <audio id="audio" src={Audio}></audio>
                {/* <span  onClick={this.count}><img src={Sheep1} width="20%" height="30%"></img></span>
                <span  onClick={this.count}><img src={Sheep1} width="20%" height="30%"></img></span>
                <span  onClick={this.count}><img src={Sheep1} width="20%" height="30%"></img></span>
                <span  onClick={this.exit}><img src={Goat_1} width="20%" height="20%"></img></span>
                <span  onClick={this.count}><img src={Sheep1} width="20%" height="30%"></img></span>
                <span  onClick={this.count}><img src={Sheep2} width="20%" height="30%"></img></span>
                <span  onClick={this.count}><img src={Sheep2} width="20%" height="30%"></img></span>
                <span  onClick={this.exit}><img src={Goat_2} width="20%" height="30%"></img></span>
                <span  onClick={this.count}><img src={Sheep2} width="20%" height="30%"></img></span>
                <span  onClick={this.count}><img src={Sheep2} width="20%" height="30%"></img></span>
                <span  onClick={this.count}><img src={Sheep3} width="20%" height="30%"></img></span>
                <span  onClick={this.exit}><img src={Goat_1} width="20%" height="30%"></img></span>
                <span  onClick={this.count}><img src={Sheep3} width="20%" height="30%"></img></span>
                <span  onClick={this.count}><img src={Sheep3} width="20%" height="30%"></img></span>
                <span  onClick={this.exit}><img src={Goat_2} width="20%" height="30%"></img></span> */}
       
             </Card>
            </>
        )
    }
}

function WithGame(props) {
    const navigate = useNavigate();
    return (
      <Game {...props} navigate={navigate} />
    );
  }
  
export default withSnackbar(WithGame);
