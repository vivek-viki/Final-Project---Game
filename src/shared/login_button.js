import { Button } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';

class Login_Button extends React.Component {
    constructor(props){
        super(props)

    }



    login = () => {
            this.props.navigate("/Login");
   
    }

    signup = () => {
        this.props.navigate("/Signup");

        }

    render()
    {
        return(
            <>
            <div style={{marginTop : '8.5%', float : 'right', display : 'flex'}}>
                <Button variant="contained" onClick={this.login}>Login</Button>
                <div className='col-md-1'></div>
                <Button variant="contained" onClick={this.signup} >Signup</Button>
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