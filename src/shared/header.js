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
        this.props.navigate("/");

    }

    render() {

        return (
            <>
                <div className="header row">
                    <div className="col-md-6"  >
                        <img src={logo} alt="cannot load logo" onClick={this.homepage} style={{}} />
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