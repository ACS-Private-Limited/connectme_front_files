import "./login.css"
import React, { useContext } from 'react';
import {BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Profile from '../../pages/profile/Profile';
import Register from "../register/Register";
import { Link, useNavigate } from "react-router-dom";


export default function Login(){
 
  /*const [showProfile, setShowProfile] = useState(false);

  const handleClick = () => {
    <Profile />
    setShowProfile(true);
  };*/
  
  const navigate = useNavigate(); 
  function newUser() { 
   
    navigate("/register");
    
  }
  function handleLogin(){
    navigate("/home")
  }
  return (
    <div className='login'>
        <div className="loginWrapper">
         <div className="loginLeft">
            <h3 className="loginLogo"> ConnectMe</h3>
            <span className="loginDesc">
                Connect the world around you 
            </span>
            </div>    
         <div className="loginRight">
            <div className="loginBox">
                <input placeholder="Email" className="loginInput" />
                <input placeholder="Password" className="loginInput" />
               <button className="loginButton" onClick={handleLogin}>Log In</button>  
                {// <span className="loginForgot">Forgot Password</span>
                }
                <button onClick = {newUser} className="loginRegisterButton">Create a New Account</button>
               
            </div>
         </div>
        </div>    
    </div>
  )
}

