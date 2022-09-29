import React from 'react';
import Card from '@mui/material/Card';
import { Typography } from '@mui/material';



class Homepage extends React.Component {
    constructor(props){
        super(props)
    }

    render()
    {
        return(
            <>
            <Card sx={{  justifyContent: 'center',  width: '50%', marginLeft:'25%', marginTop : '15%' }}>
            <div style={{textAlign: 'center'}}>
            <Typography sx={{fontSize : '30px'}}>About Game</Typography>
           <Typography>Lion to Sheep hunting game in limited time</Typography>
           <Typography>1. sheep will be placed in the image</Typography>
           <Typography>2. identify the sheep </Typography>
           <Typography>3. place mouse pointer at the image </Typography>
           <br/>
           </div>
    
            </Card>
           
            </>
        );
    }
}

export default Homepage;