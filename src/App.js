import logo from './logo.svg';
import './App.css';
import { Route, Routes, BrowserRouter, Navigate } from "react-router-dom";
import Login from './authentication/login';
import Signup from './authentication/signup';
import Homepage from './components/homepage';
import React from 'react';
import WithSignUp from './authentication/signup';
import Dashboard from './components/dashboard';
import Game from './components/game';
import ChangePassword from './authentication/changepassword';

class App extends React.Component {
  constructor(props){
      super(props)
  }

  render()
  {
      const enableuser = localStorage.getItem("enableuser");

      return(
        <>;
    <Routes>
         <Route path="/" element={<Homepage {...this.props} />}/>
                <Route path="/Login" element={<Login  {...this.props}/>} />
                <Route path="/Signup" element={<WithSignUp {...this.props}/>} />
                <Route path="/changepassword" element={<ChangePassword {...this.props}/>} />
                {/* <Route path="/*" element={<Navigate to="/" replace />} /> */}
                {(enableuser == "1") ? 
                <>
                <Route path="/dashboard" element={<Dashboard {...this.props}/>}/>
                <Route path="/game" element={<Game {...this.props}/>}/>
                </>
                :
                ""
              }
      </Routes>
      </>
     );
    }
}
export default App;
