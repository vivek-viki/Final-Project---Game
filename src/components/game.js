import { Button, Card } from '@mui/material';
import axios from 'axios';
import React from 'react';
import Image1 from '../assests/images/image_1.jpg';
// import Image2 from '../assests/images/image_2.jpg';
import URL from '../url.json';
import { withSnackbar } from '../shared/snackbar';
import { useNavigate } from 'react-router-dom';
import GameOver from "../assests/audio/gameover.mp3";
import GameShot from "../assests/audio/gameover.mp3";
import Theme from "../assests/audio/theme.mp3";
import Crosshair from "../assests/images/crosshair.png";
import Game_Backgroung from "../assests/images/game_background.jpg";
import Target from "../assests/images/target.png"; 
import Main_Image from "../assests/images/main-img.png";
import Pointer from '../assests/images/pointer.jpg';
import Audio from '../assests/audio/lionroar.mp3';
import Sheep1 from '../assests/images/sheep_1.jpg';
import Correct from "../assests/images/correct.jpg";
import Cancel from "../assests/images/cancel.jpg";
import Sheep from "../assests/images/sheep.png";
import Lion from "../assests/images/lion.png";

class Game extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            time: {}, 
            seconds: 20,
            initalTimer: 20,
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
    // this.mousePointer();
   
  }
  componentDidUpdate(){
    // if(this.state.time.s == 0)
    // {
    //     this.props.navigate("/dashboard");
    // }
  }

  mousePointer = () => {

    // const el = (sel, par) => (par||document).querySelector(sel);

    // const elArea  = el("#area");
    // const elPopup = el("#popup");
    
    // const showPopup = (evt) => {
    //   Object.assign(elPopup.style, {
    //     left: `${evt.clientX}px`,
    //     top: `${evt.clientY}px`,
    //     display: `block`,
    //   });
    // };
    
    // elArea.addEventListener("click", showPopup);
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
  // theme.play();
  const duck = document.querySelector('#lion');
  const sheep = document.querySelector('#duck');
  const score = document.querySelector('#score-counter');
  var moving = false;
duck.addEventListener('click', 
  initialClick, false
);
  // duck.addEventListener("mousemove", initialClick, false);
//  sheep.addEventListener("mousemove", initialClick, false);

  function move(e){

  var newX = e.clientX - 10;
  var newY = e.clientY - 10;

  duck.style.left = newX + "px";
  duck.style.top = newY + "px";
  // sheep.remove();
//   if(sheep.style.left == duck.style.left)
//  // duck.addEventListener('mouseover', sheep.remove());
//   // sheep.innerHTML = "+1";
//    sheep.remove();


  
}

function initialClick(e) {

  if(moving){
   // document.addEventListener("mousemove", sheep.remove());
    document.removeEventListener("mousemove", move, sheep.remove());
    score.innerHTML = parseInt(score.innerHTML) + 1;
    moving = !moving;
    return;
  }
  
  moving = !moving;

  document.addEventListener("mousemove", move, false);

}
  // duck.addEventListener('mousemove',(e)=>{
  //   const w = window.innerWidth;
  // const h = window.innerHeight; 
  //   duck.style.top = getRandomNum(w) + 'px';
  //   duck.style.left = getRandomNum(h) + 'px';
  //     });
//Add click event
// duck.addEventListener('click', ()=> {
//   increaseScore();
//   moveDuck();
// });

//Increase score by 1
const increaseScore = () => {
  //Get the content of the target element. The current value for score
  const score = document.querySelector("#score-counter").innerHTML;
  //Get the element to increase the value
  const scoreHTML = document.querySelector("#score-counter");
  //Cast the score value to Number
  let count = Number(score);
  //Set the new score to the target element
  scoreHTML.innerHTML = count + 1;
};

//Get a Random number
const getRandomNum = (num) => {
  return Math.floor(Math.random() * Math.floor(num));
}
/*
Move the duck randomly 
*/
const moveDuck = () => {
  debugger;
  const w = window.innerWidth;
  const h = window.innerHeight;  
  duck.style.top = getRandomNum(w) + 'px';
  duck.style.left = getRandomNum(h) + 'px';
   
}
}

  // startgame = () =>{
  //   debugger;
  //   const cross = document.querySelector('.cursor');
  //   const target = document.querySelector('.target');
  //   const scoreText = document.querySelector('.score');
  //   const timerText = document.querySelector('.timer');
  //   const highscoreText = document.querySelector('.highscore');
  //   const gunshot = document.querySelector('.gunshot');
  //   const gameover = document.querySelector('.gameover');
  //   const menupage = document.querySelector('.main-page');
  //   const playGame = document.querySelector('.play_game');
  //   const themeSong = document.querySelector('.theme');

  //   var score = 0;
  //   var timerLeft = 15;
  //   // var highscore = 0;
  //   const changePosition = ()=>{
  //     const xAxis = Math.floor(Math.random()* 1880);
  //     const yAxis = Math.floor(Math.random()* 577);
  //     target.style.top = `${yAxis}px`;
  //     target.style.left = `${xAxis}px`
  // };
  //   // if(localStorage.getItem('highscore')){
  //   //   highscore = localStorage.getItem('highscore');
  //   //   highscoreText.innerHTML = `Highscore ${highscore}`;
  //   //   }
  //     themeSong.currentTime = 0;
  //     // themeSong.play();
      
  //     scoreText.innerHTML = score;
  //     timerText.innerHTML = timerLeft;
  //     changePosition();

  //     menupage.addEventListener('click', (e) => e.stopPropagation());

  //     const fadePage = ()=>{
  //       themeSong.pause();
  //       menupage.style.opacity = 0;
  //       setTimeout(()=>{
  //           menupage.style.display = "none";
  //       },500);
  //       play();
  //   }
  //   const play = ()=>{
  //     themeSong.pause();
  //       setInterval(()=>{
  //           timer()
  //       },1000);
  //   }
  //   const gameOver = ()=>{
  //       alert(`Game Over \n Your Score = ${score}`);
  //       // if(+localStorage.getItem('highScore') < score){
  //       //     localStorage.setItem('highscore', score);
  //       //     highscore = score;
  //       //     highscoreText.innerHTML = `Highscore ${highscore}`;
  //       // }
  //       var score = 0;
  //       var timeLeft = 15+2;
  //       scoreText.innerHTML = score;
  //       timerText.innerHTML = timeLeft;
  //   }
  //   const timer = ()=>{
  //       if(timerLeft === 0){
  //           gameover.play();
  //           gameOver();
  //           timerLeft = 15+2;
  //       }
  //       timerLeft -= 1;
  //       timerText.innerHTML = timerLeft;
  //   }
    
  //   document.addEventListener('mousemove',(e)=>{
  //       cross.style.left = `${e.clientX}px`;
  //       cross.style.top = `${e.clientY}px`;
  //   });
    

    
  //   const scoreIncrease = ()=>{
  //       gunshot.currentTime = 0;
  //       gunshot.play();
  //       score += 1;
  //       scoreText.innerHTML = score;
  //       changePosition();
  //   }
    
  //   target.addEventListener('click', scoreIncrease);
  //   playGame.addEventListener('click', fadePage);
    
  // }

  //   countscore = (key, value) => {
  //       debugger;
  //       const array = [3,7,10,11,14];
  //       if(array.includes(key))
  //       {
  //         var replace_image =  this.state.image_array.map((item) => {
  //           if (item.key == key) {
  //                item.value = Cancel
  //       }
  //       return item})
  //       this.setState({image_array : replace_image});
  //       setTimeout(() => {
  //         this.props.navigate("/dashboard");
  //       }, 2000);
  //       }
  //       else
  //       {
  //       var audio = document.getElementById("audio");
  //       audio.play();
  //      let count =this.state.count + 1;
  //      var replace_image =  this.state.image_array.map((item) => {
  //              if (item.key == key) {
  //                   item.value = Correct
  //       }
  //     return item})
  //         this.setState({image_array : replace_image})
  //     // var remove_image =  this.state.image_array.filter(image => {
  //     //                       return image.key != key
  //     //                   })
  //     //   this.setState({image_array : remove_image})
  //       if(count == (15 - array.length))
  //       {
  //           axios.post(URL.Endpoints.ADD_SCORE,{
  //               userid : localStorage.getItem("userid"),
  //               score : count
  //           }).then(data =>
  //               {
  //                   this.props.snackbarShowMessage(`Your score is ` + count , `success`);
  //                   this.state.images.filter(image => {
  //                       return image.image_1
  //                   })
  //                   this.startTimer();
                  
  //                   if(count == 10)
  //                   {
  //                     alert("game over");
  //                       setTimeout(() => {
  //                           this.props.navigate("/dashboard");
  //                         }, 2000);
  //                   }
  //                   this.setState({images : this.state.images_second, count : 0})
                 
  //               }
  //               )
        
  //   }
  
  //       this.setState({
  //           count : count
  //       })
  //   }
  // }


// startGame = () => {
  

// }

    render(){
 
        return(
            <>
            {/* <p style={{color:'antiquewhite', marginTop:'5%', fontSize:'30px', fontFamily : 'inherit' , textAlign : 'center'}}>  {this.state.time.s}</p> */}
            <Card sx={{  justifyContent: 'center', marginTop : '5.5%', height : '455px'}} > 
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
                 {/* <main class="main-page">
        <div class="head-img">
            <img src={Main_Image} alt="gun-and-target-image"/>
        </div>
        <div class="game-text">
            <h1>AIM SHOOTER</h1>
        </div>
        <div class="play_game">
            <p>PLAY</p>
        </div>
    </main>
    <audio src={GameShot} class="gunshot"></audio>
    <audio src={GameOver} class="gameover"></audio>
    <audio src={Theme} class="theme"></audio>
    <div class="cursor">
        <img src={Crosshair} alt="crosshair" draggable="false"/>
    </div>
    <div class="target">
        <img src={Target} alt="target"/>
    </div>
    <div class="score">
    </div>
    <div class="timer">
    </div> */}
    {/* <div class="highscore">
        HighScore 0
    </div> */}
    {/* </div>           */}
      {/* <br/>
        
        <audio id="audio" src={Audio}></audio> */}
           {/* <div class="container"> */}
    <img src="https://bit.ly/2Q4q14a"></img>
    <img  id='duck' src={Sheep} ></img>
    <img  id='lion' src={Lion} onLoad={this.startGame}></img>
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
