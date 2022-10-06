import { Button, Card, TextField } from '@mui/material';
import axios from 'axios';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { withSnackbar } from '../shared/snackbar';
import URL from '../url.json';

class ChangePassword extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            userid_helpertext : false,
            password_helpertext : false,
            retype_password_helpertext : false,
            userid : "",
            password : "",
            reenter_password : ""
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

    setRetype_Password = (e) => {
        let retype_password = e.target.value;
        let reenter_password_helpertext = this.state.retype_password_helpertext;
        if(e.target.value)
        {
            reenter_password_helpertext = false
        }
        else{
            reenter_password_helpertext = true
        }
        this.setState({
            reenter_password : retype_password,
            retype_password_helpertext : reenter_password_helpertext
        })
    }

    ChangePassword = () => {
        debugger;
        if(this.state.password != "" && this.state.userid != "" && this.state.reenter_password != "" && this.state.password === this.state.reenter_password)
        {
            axios.put(URL.Endpoints.FORGOT_PASSWORD, {
                userid : this.state.userid,
                password : this.state.password
            })
            .then(data =>{
                if(data.data == 1)
                {
                    this.props.snackbarShowMessage(`Password changed successfully.`, `success`);
                    this.setState({ response: data,
                        userid : "",
                        password : "",
                        reenter_password : ""
                        })
                    
                }
                if(data.data == "exists")
                {
                    this.props.snackbarShowMessage(`cannot enter previous password.`, `error`);
                }
                if(data.data == 0)
                {
                    this.props.snackbarShowMessage(`user ` + this.state.userid + ` Not exists.`, `error`);
                }});
        }
        else
        {
            if(this.state.password != this.state.reenter_password)
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
            if(this.state.reenter_password == "")
            {
                this.setState({retype_password_helpertext : true})
            }
           
        }
    }

    render(){
        return(
            <>
              <Card sx={{  justifyContent: 'center',  width: '50%', marginLeft:'25%', marginTop : '15%' }} className="background_img">
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
          label="New Password"
          id="standard-error-helper-text"
          variant="standard"
          sx={{width : '40%'}}
          error = {this.state.password_helpertext}
          onChange = {this.setPassword}
        />
            </div>
            <br/>

            <div>
            <TextField
            value={this.state.reenter_password}
          label="Re-Enter Password"
          id="standard-error-helper-text"
          variant="standard"
          sx={{width : '40%'}}
          error = {this.state.retype_password_helpertext}
          onChange = {this.setRetype_Password}
        />
            </div>
            <br/>

            <div>
                <Button variant="contained" sx={{width : '40%', fontFamily : 'inherit'}} onClick={this.ChangePassword}>Forgot Password</Button>
            </div>
            <br/>
            </div>
    
    </Card>
            </>
        )
    }
}

function WithChangePassword(props) {
    const navigate = useNavigate();
    return (
      <ChangePassword {...props} navigate={navigate} />
    );
  }
  
export default withSnackbar(WithChangePassword);
