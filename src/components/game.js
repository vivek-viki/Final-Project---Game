import { Card } from '@mui/material';
import React from 'react';
import Image from '../assests/images/image_1.jpg';

class Game extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            count : 0
        }
    }

    count = (e) => {
        // debugger;
        let count =this.state.count + 1;
        console.log(count);
        this.setState({
            count : count
        })
    }

    render(){
        return(
            <>
            <Card sx={{  justifyContent: 'center', marginRight:'3%', marginLeft:'3%', marginTop : '8%', height : '440px' }}>
            <img src={Image} height='100%' width="100%" onDoubleClick={this.count}></img>
            </Card>
            </>
        )
    }
}

export default Game;