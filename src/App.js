import logo from './logo.svg';
import './App.css';
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Login from './authentication/login';
import Signup from './authentication/signup';
import Homepage from './components/homepage';
import React from 'react';
import WithSignUp from './authentication/signup';

class App extends React.Component {
  constructor(props){
      super(props)
  }

  render()
  {
      return(
   // <div style={{marginTop : '8%'}}>
    // <BrowserRouter>
    <Routes >
         <Route path="/" element={<Homepage {...this.props} />}/>
                <Route path="/Login" element={<Login  {...this.props}/>} />
                <Route path="/Signup" element={<WithSignUp {...this.props}/>} />
      </Routes>
      // </BrowserRouter>
     // </div>
     );
    }
}
export default App;
