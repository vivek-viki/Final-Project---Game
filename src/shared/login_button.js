import { Button } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import CheckIcon from '@mui/icons-material/Check';
import Avatar from '@mui/joy/Avatar';
import Chip from '@mui/joy/Chip';

class Login_Button extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            enableuser : true
        }

    }

    componentDidMount(){
       let enableuser =  localStorage.getItem("enableuser")
       if(enableuser == "1")
       {
        this.setState({enableuser : false})
       }
    }

    login = () => {
            this.props.navigate("/Login");
   
    }

    signup = () => {
        this.props.navigate("/Signup");

        }

    logout = () => {
        localStorage.setItem("enableuser", 0);
        localStorage.setItem("userid", ""); 
        this.props.navigate("/");
        this.setState({enableuser : true})
    }

    render()
    {
        const enableuser = localStorage.getItem("enableuser");
        const userid = localStorage.getItem("userid");
 
        return(
            <>
            <div style={{marginTop : '8.5%', float : 'right', display : 'flex'}}>
                <Button hidden={enableuser == "1"} variant="contained" onClick={this.login}>Login</Button>
                <div className='col-md-1' hidden={enableuser == "1"}></div>
                <Button hidden={enableuser == "1"} variant="contained" onClick={this.signup} >Signup</Button>
                {enableuser == "1" ? <>
                
                <Chip
                variant="outlined"
                color="neutral"
                 startDecorator={<Avatar size="sm" />}
                 endDecorator={<CheckIcon fontSize="md" />}
                
                >
                {userid}
                 </Chip>
                <div className='col-md-1'></div>
                </> : ""}
                 <Button hidden={this.state.enableuser } variant="contained" onClick={this.logout} >Logout</Button>
            </div>
            </>
            );
        }
    }

function Withlogin_button(props) {
    const navigate = useNavigate();
    return (
        <Login_Button {...props}  navigate={navigate} />
     );
     }

export default Withlogin_button;