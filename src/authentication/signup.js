import React from 'react';
import TextField from '@mui/material/TextField';
import Card from '@mui/material/Card';
import { Button } from '@mui/material';
import axios from 'axios';
import URL from '../url.json';
import { withSnackbar } from '../shared/snackbar';
import Payment from './Payment';

class Signup extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            userid : "",
            password : "",
            confirm_password : "",
            userid_helpertext : false,
            password_helpertext : false,
            confirmPass_helpertext : false,
            response : []
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
    
    setConfirmPassword = (e) => {
        let confirm_password = e.target.value;
        let confirmpassword_helpertext = this.state.confirmPass_helpertext;
        if(e.target.value)
        {
            confirmpassword_helpertext = false
        }
        else{
            confirmpassword_helpertext = true
        }
        this.setState({
            confirm_password : confirm_password,
            confirmPass_helpertext : confirmpassword_helpertext
        })
    }

    handleSignUp = () => {
debugger;
if(this.state.password != "" && this.state.userid.length <=8  && this.state.userid != "" && this.state.confirm_password != "" && (this.state.password === this.state.confirm_password))
{
    axios.post(URL.Endpoints.ADD_USER, {
        userid : this.state.userid,
        password : this.state.password,
        payment : localStorage.getItem("payment")
    })
    .then(data =>{
        if(data.data.length)
        {
            this.props.snackbarShowMessage(`user ` + data.data[0].userid + ` already exists.`, `error`);
        }
        else
        {
        this.props.snackbarShowMessage(`user ` + data.data.userid + ` created successfully.`, `success`);
        localStorage.setItem("payment", 0)
        this.setState({ response: data,
     userid : "",
     password : "",
     confirm_password : ""
    })}});
}
else
{
    if(this.state.userid.length > 8)
    {
        this.props.snackbarShowMessage(`user id cannot be more than 8 character.`, `error`);
    }
    if(this.state.password.length > 10)
    {
        this.props.snackbarShowMessage(`password cannot be more than 10 character.`, `error`);
    }
    if(this.state.password != this.state.confirm_password)
    {
        this.props.snackbarShowMessage(`Password not matched.`, `error`);
    }
    if(this.state.userid == "")
    {
        this.setState({userid_helpertext : true})
    }
    if(this.state.password == "")
    {
        this.setState({password_helpertext : true})
    }
    if(this.state.confirm_password == "")
    {
        this.setState({confirmPass_helpertext : true})
    }
   
}

    }
    render()
    {
        return(
            <>
            <Card sx={{  justifyContent: 'center',  width: '50%', marginLeft:'25%', marginTop : '12%' }} className="background_img">
            <div style={{textAlign: 'center'}}>
            <div>
            <TextField
            value = {this.state.userid}
          id="standard-error-helper-text"
          label="User ID"
          variant="standard"
          sx={{width : '40%'}}
          error = {this.state.userid_helpertext}
          onChange={this.setUserId}
        />
        </div>
        <br/>
            <div>
            <TextField
            value = {this.state.password}
          label="Password"
          id="standard-error-helper-text"
          variant="standard"
          sx={{width : '40%'}}
          error = {this.state.password_helpertext}
          onChange={this.setPassword}
        />
            </div>
            <br/>
            <div>
            <TextField
            value={this.state.confirm_password}
          label="Re-Enter Password"
          id="standard-error-helper-text"
          variant="standard"
          sx={{width : '40%'}}
          error = {this.state.confirmPass_helpertext}
          onChange={this.setConfirmPassword}
          />
            </div>
            <br/>
            <Payment/>
            <br/>
            <div>
                <Button variant="contained" sx={{width : '40%', fontFamily : 'inherit'}} onClick={this.handleSignUp}>Sign Up</Button>
            </div>
            <br/>
    </div>
    </Card>
           
            </>
        );
    }
}

function WithSignUp(props) {
    return (
      <Signup {...props} />
    );
  }
  
export default withSnackbar(WithSignUp);