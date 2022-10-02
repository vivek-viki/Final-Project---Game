import { Button, Card } from '@mui/material';
import axios from 'axios';
import React from 'react';
import Image1 from '../assests/images/image_1.jpg';
import Image2 from '../assests/images/image_2.jpg';
import URL from '../url.json';
import { withSnackbar } from '../shared/snackbar';
import { useNavigate } from 'react-router-dom';

class Game extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            time: {}, 
            seconds: 20,
            initalTimer: 20,
            count : 0,
            images : [{image_1 : Image1 , count : 11}],
            images_second : [{image_1 : Image2, count : 10}]
       
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
  
  }
  componentDidUpdate(){
    if(this.state.time.s == 0)
    {
        this.props.navigate("/dashboard");
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

    count = (e) => {
        debugger;
        // if(this.state.time.s == 0)
        // {
        //     this.props.navigate("/dashboard");
        // }
       let count =this.state.count + 1;
        if(count == this.state.images[0].count)
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
            <p style={{color:'antiquewhite', marginTop:'5%', fontSize:'30px', fontFamily : 'monospace' , textAlign : 'center'}}>  {this.state.time.s}</p>
            <Card sx={{  justifyContent: 'center', marginRight:'3%', marginLeft:'3%', height : '390px' }}> 
                {this.state.images.map((image) => {
                     return <img src={image.image_1}  height='100%' width="100%" onDoubleClick={this.count}></img>
                })

                }
        
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
