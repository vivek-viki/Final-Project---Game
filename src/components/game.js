import { Card } from '@mui/material';
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
            count : 0,
            images : [{image_1 : Image1 , count : 11}],
            images_second : [{image_1 : Image2, count : 10}]
       
        }
    }

    count = (e) => {
        debugger;
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
                  
                    if(count == 10)
                    {
                        setTimeout(() => {
                            this.props.navigate("/dashboard");
                          }, 3000);
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
            <Card sx={{  justifyContent: 'center', marginRight:'3%', marginLeft:'3%', marginTop : '8%', height : '440px' }}>
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
