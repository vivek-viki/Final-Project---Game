import React from 'react';
import TextField from '@mui/material/TextField';
import Card from '@mui/material/Card';
import { Button } from '@mui/material';
import axios from 'axios';
import URL from '../url.json';
import { withSnackbar } from '../shared/snackbar';
import { useNavigate } from 'react-router-dom';
import Scoreboard from '../shared/dialogs/scoreboard_popup';

class Dashboard extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            enablepopup : false
        }
    }

    scoreboard = () => {
        this.setState({enablepopup : true});
    }

    onClose = () => {
        this.setState({enablepopup : false});
    }
    render()
    {

        return(
            <>
            <Card sx={{  justifyContent: 'center',  width: '50%', marginLeft:'25%', marginTop : '20%' }}>
                <div className='row'>
                   <Button variant="contained" onClick={this.startgame}>Start Game</Button>
                   <div className='col-md-1'></div><br/>
                   <Button variant="contained" onClick={this.scoreboard}>Score board</Button>
                   {<Scoreboard
            keepMounted
            open={this.state.enablepopup}
            onClose={this.onClose}
            {...this.props}
             />}
                   </div>
            </Card>
           
            </>
        );
    }
}

function WithDashboard(props) {
    const navigate = useNavigate();
    return (
      <Dashboard {...props} navigate={navigate}/>
    );
  }
  
export default withSnackbar(WithDashboard);