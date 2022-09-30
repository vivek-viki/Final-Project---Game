import React from 'react';
import Card from '@mui/material/Card';
import { Button, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';



class Homepage extends React.Component {
    constructor(props){
        super(props)
    }

    dashboard = () => {
        this.props.navigate("/dashboard");
    }
    render()
    {
        let enableuser = localStorage.getItem("enableuser");
        return(
            <>
            <Card sx={{  justifyContent: 'center',  width: '50%', marginLeft:'25%', marginTop : '15%' }}>
            <div style={{textAlign: 'center'}}>
            <Typography sx={{fontSize : '30px'}}>About Game</Typography>
           <Typography>Lion to Sheep hunting game in limited time</Typography>
           <Typography>1. sheep will be placed in the image</Typography>
           <Typography>2. identify the sheep </Typography>
           <Typography>3. place mouse pointer at the image </Typography>
           {enableuser == "1" ? <><Button  variant="outlined" onClick={this.dashboard}>dashboard</Button><br/></> : "" }
           <br/>
           </div>
    
            </Card>
           
            </>
        );
    }
}

function WithHomepage(props) {
    const navigate = useNavigate();
    return (
        <Homepage {...props}  navigate={navigate} />
     );
     }

export default WithHomepage;