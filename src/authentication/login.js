import React from 'react';
import TextField from '@mui/material/TextField';
import Card from '@mui/material/Card';
import { Button } from '@mui/material';
import axios from 'axios';
import URL from '../url.json';


class Login extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            userid_helpertext : false,
            password_helpertext : false,
            userid : "",
            password : ""
        }
    }

    setUserId = (e) =>{
        let user_id = e.target.value;
        let user_helpertext = this.state.userid_helpertext;
        if(e.target.value)
        {
            user_helpertext = false
        }
        else{
           user_helpertext = true
        }
        this.setState({
            userid : user_id,
            userid_helpertext : user_helpertext
        })
    }

    setPassword = (e) => {
        let password = e.target.value;
        let pass_helpertext = this.state.password_helpertext;
        if(e.target.value)
        {
            pass_helpertext = false
        }
        else{
            pass_helpertext = true
        }
        this.setState({
            password : password,
            password_helpertext : pass_helpertext
        })
    }
    
    handleSubmit = () => {
        if(this.state.password != "" && this.state.userid != "")
        {
            
        }
        else
        {
            if(this.state.userid == "")
            {
                this.setState({userid_helpertext : true})
            }
            if(this.state.password == "")
            {
                this.setState({password_helpertext : true})
            }
           
        }
    }

    render()
    {
        return(
            <>
            <Card sx={{  justifyContent: 'center',  width: '50%', marginLeft:'25%', marginTop : '15%' }}>
                <div style={{textAlign: 'center'}}>
            <div>
            <TextField
            value = {this.state.userid}
          id="standard-error-helper-text"
          label="User ID"
          variant="standard"
          sx={{width : '40%'}}
          error = {this.state.userid_helpertext}
          onChange = {this.setUserId}
        />
        </div>
        <br/>
            <div>
            <TextField
            value={this.state.password}
          label="Password"
          id="standard-error-helper-text"
          variant="standard"
          sx={{width : '40%'}}
          error = {this.state.password_helpertext}
          onChange = {this.setPassword}
        />
            </div>
            <br/>
            <div>
                <Button variant="contained" sx={{width : '40%'}} onClick={this.handleSubmit}>Login</Button>
            </div>
            <br/>
            </div>
    
    </Card>
           
            </>
        );
    }
}

export default Login;