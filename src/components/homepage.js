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
            <Card sx={{  justifyContent: 'center',  width: '50%', marginLeft:'25%', marginTop : '15%' }} className="background_img">
            <div style={{textAlign: 'center'}}>
            <Typography sx={{fontSize : '30px'}}>About Game</Typography>
            <br/>
           <Typography>Lion to Sheep hunting game in limited time</Typography>
           <br/>
           <Typography>1. Sheep will be placed in the image</Typography>
           <Typography>2. Identify the sheep </Typography>
           <Typography>3. Double click on the sheep placed in the image </Typography>
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