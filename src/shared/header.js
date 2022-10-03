import '../assests/scss/header.css';
import React from 'react'; 
import logo from '../assests/images/logo.jpg';
import Withlogin_button from './login_button';
import { useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';

class Header extends React.Component {
    constructor(props) {
        super(props);
     
    }
    homepage = () => {
        // localStorage.setItem("enableuser", 0);
        // localStorage.setItem("userid", ""); 
        this.props.navigate("/");

    }

    render() {

        return (
            <>
                <div className="header row">
                    <div className="col-md-6" style={{display:'flex'}} >
                        <img className='img' src={logo} alt="cannot load logo" onClick={this.homepage} style={{}} />
                        <div className='col-md-1'></div>
                        <span style={{marginTop:'5%', color:'white', fontSize:'30px'}}>Lion Hunting</span>
                    </div>

                    <div className="col-md-6"  >
                        <Withlogin_button  />
                    </div>
                </div>
            </>


        )

    };
}

function WithLogin(props) {
    const navigate = useNavigate();
    return (
        <Header {...props}  navigate={navigate} />
     );
     }

export default WithLogin;