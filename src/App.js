import logo from './logo.svg';
import './App.css';
import { Route, Routes, BrowserRouter, Navigate } from "react-router-dom";
import Login from './authentication/login';
import Signup from './authentication/signup';
import Homepage from './components/homepage';
import React from 'react';
import WithSignUp from './authentication/signup';
import Dashboard from './components/dashboard';

class App extends React.Component {
  constructor(props){
      super(props)
  }

  render()
  {
      const enableuser = localStorage.getItem("enableuser");

      return(
        <>
     {/* <div style={{marginTop : '8%'}}> */}
     {/* <BrowserRouter> */}
    <Routes>
         <Route path="/" element={<Homepage {...this.props} />}/>
                <Route path="/Login" element={<Login  {...this.props}/>} />
                <Route path="/Signup" element={<WithSignUp {...this.props}/>} />
                {/* <Route path="/*" element={<Navigate to="/" replace />} /> */}
                {(enableuser == "1") ? 
                <Route path="/dashboard" element={<Dashboard {...this.props}/>}/>
                :
                ""
              }
      </Routes>
       {/* </BrowserRouter> */}
       {/* </div> */}
      </>
     );
    }
}
export default App;
