import { Button, Card } from '@mui/material';
import axios from 'axios';
import React from 'react';
import Image1 from '../assests/images/image_1.jpg';
// import Image2 from '../assests/images/image_2.jpg';
import URL from '../url.json';
import { withSnackbar } from '../shared/snackbar';
import { useNavigate } from 'react-router-dom';
import Theme from "../assests/audio/theme.mp3";
import Game_Background from "../assests/images/game_background.jpg";
import Sheep from "../assests/images/sheep.png";
import Lion from "../assests/images/lion.png";
import Sheep1 from "../assests/images/sheep1.gif";
import Sheep2 from "../assests/images/sheep2.gif";
import Grass from "../assests/images/grass.gif";

class Game extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            time: {}, 
            seconds: 15,
            initalTimer: 15,
            count : 0
            // images : [{image_1 : Image1 , count : 1}],
            // images_second : [{image_1 : Image2, count : 10}]
            // image_array : [
            //   {key : 1,value : Sheep1}, 
            //   {key : 2,value : Sheep2},
            //   {key : 3,value : Goat_1},
            //   {key : 4,value : Sheep1},
            //   {key : 5,value : Sheep1},
            //   {key : 6,value : Sheep3},
            //   {key : 7,value : Goat_2},
            //   {key : 8,value : Sheep3},
            //   {key : 9,value : Sheep2},
            //   {key : 10,value : Goat_2},
            //   {key : 11,value : Goat_1},
            //   {key : 12,value : Sheep2},
            //   {key : 13,value : Sheep1},
            //   {key : 14,value : Goat_1},
            //   {key : 15,value : Sheep3}
            // ]
       
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
    // let timeLeftVar = this.secondsToTime(this.state.seconds);
    // this.setState({ time: timeLeftVar });
    // this.startTimer();
   
  }
  componentDidUpdate(){
    if(this.state.time.s == 0)
    {
      axios.post(URL.Endpoints.ADD_SCORE,{
        userid : localStorage.getItem("userid"),
        score : localStorage.getItem("score")
    }).then(data =>
        {
            // this.props.snackbarShowMessage(`Your score is ` + localStorage.getItem("score") , `success`);
            localStorage.removeItem("score");
              // alert("yours score " + score.innerHTML);
                setTimeout(() => {
                    this.props.navigate("/dashboard");
                  }, 2000);
            })
      // this.props.navigate("/dashboard");
  }
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

startGame = () => {
  debugger;
  const theme  = document.querySelector("#theme");
  theme.currentTime = 0;
  theme.play();
  const duck = document.querySelector('#lion');
  const sheep = document.querySelector('#duck');
  const score = document.querySelector('#score-counter');
  const sheep1 = document.querySelector('#sheep1');
  const sheep2 = document.querySelector('#sheep2');
  const sheep3 = document.querySelector('#sheep3');
  const sheep4 = document.querySelector('#sheep4');
  const sheep5 = document.querySelector('#sheep5');
  const sheep6 = document.querySelector('#sheep6');
    var moving = false;
    this.startTimer();
   
  sheep.addEventListener("click" ,removesheep);
  sheep1.addEventListener("click" , removesheep1);
  sheep2.addEventListener("click" , removesheep2);
  sheep3.addEventListener("click" , removesheep3);
  sheep4.addEventListener("click" , removesheep4);
  sheep5.addEventListener("click" , removesheep5);
  sheep6.addEventListener("click" , removesheep6);

function removesheep()
{
  sheep.removeEventListener("click", sheep.remove());
  score.innerHTML = parseInt(score.innerHTML) + 1;
  localStorage.setItem("score", score.innerHTML);
}
function removesheep1()
{
  sheep1.removeEventListener("click", sheep1.remove());
  score.innerHTML = parseInt(score.innerHTML) + 1;
  localStorage.setItem("score", score.innerHTML);
}
function removesheep2()
{
  sheep2.removeEventListener("click", sheep2.remove());
  score.innerHTML = parseInt(score.innerHTML) + 1;
  localStorage.setItem("score", score.innerHTML);
}
function removesheep3()
{
  sheep3.removeEventListener("click", sheep3.remove());
  score.innerHTML = parseInt(score.innerHTML) + 1;
  localStorage.setItem("score", score.innerHTML);
}
function removesheep4()
{
  sheep4.removeEventListener("click", sheep4.remove());
  score.innerHTML = parseInt(score.innerHTML) + 1;
  localStorage.setItem("score", score.innerHTML);
}
function removesheep5()
{
  sheep5.removeEventListener("click", sheep5.remove());
  score.innerHTML = parseInt(score.innerHTML) + 1;
  localStorage.setItem("score", score.innerHTML);
}
function removesheep6()
{
  sheep6.removeEventListener("click", sheep6.remove());
  score.innerHTML = parseInt(score.innerHTML) + 1;
  localStorage.setItem("score", score.innerHTML);
}
  function move(e){

  var newX = e.clientX - 10;
  var newY = e.clientY - 10;

  duck.style.left = newX + "px";
  duck.style.top = newY + "px";
  
}

}

    render(){
 
        return(
            <>
            {/* <p style={{color:'antiquewhite', marginTop:'5%', fontSize:'30px', fontFamily : 'inherit' , textAlign : 'center'}}>  {this.state.time.s}</p> */}
    
            <Card sx={{  justifyContent: 'center', marginTop : '5.5%', height : '455px'}}  className="mouse" onLoad={this.startGame}> 
            {/* <div className='card'> */}
            {/* <img src={Sheep1} onClick={this.count} height='100%' width="50%" ></img>
            <img src={Sheep1} onClick={this.count} height='100%' width="100%" ></img> */}
                {/* {this.state.images.map((image) => {
                     return <><span id="area"><img src={image.image_1}  height='100%' width="100%" onClick={this.count}></img></span><div id="popup"><img src={Pointer} width="20px" height="20px" style={{borderRadius : '40px'}}/></div></>
                })

                } */}

              {/* {this.state.image_array.map((image) => {
                  return(
                    <>
                 <span id="area" ><img src={image.value}   height='30%' width="20%" onClick={(event) => this.countscore(image.key, image.value)}></img></span> */}
                   {/* <div id="popup"><img src={Pointer} width="20px" height="20px" style={{borderRadius : '40px'}}/> 
                   </div>  */}
                   {/* </>
                  )
              })} */}
              
    <img src={Game_Background} style={{width : "100%"}} width = "1000px"></img>
    <img  id='duck' src={Sheep} ></img>
    <img  id='sheep1' src={Sheep1} onClick={this.sheepclick}></img>
    <img  id='sheep2' src={Sheep2} ></img>
    <img  id='sheep3' src={Sheep2} ></img>
    <img  id='sheep5' src={Sheep2} ></img>
    <img  id='sheep6' src={Sheep2} ></img>
    <img  id='sheep4' src={Sheep1} ></img>
    <img id="grass" src={Grass}></img>
    <img id="grass1" src={Grass}></img>
    {/* <img  id='lion' src={Lion} ></img> */}
    <div  class='Timecontainer'>
      <div id="time-text">Time</div>
      <div id="time-counter"> {this.state.time.s}</div>
    </div>
    <div  class='scoreContainer'>
      <div id="score-text">Score</div>
      <div id="score-counter">0</div>
    </div>
    <audio src={Theme} id="theme"></audio>
  {/* </div> */}
       
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
