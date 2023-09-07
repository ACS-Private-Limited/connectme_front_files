import { useNavigate } from "react-router-dom";

import React, { useEffect } from 'react';
import "./connecthome.css"


export const Connecthome = () => {
    const navigate = useNavigate();
  function handleLogin(){
    navigate("/login");
  }

  function handleRegister(){
    navigate("/register");
  }
  
    return(
        <div className="home">
        <div >
          <p className="homeLogo">ConnectMe</p>
          <div className='navbarRight'>
                 <div className='navbarLinks'>
                     
                     <button class="btn btn-success me-2"  onClick={handleLogin}>Sign In</button>
                     <button class="btn btn-primary my-2"  onClick={handleRegister}>Sign Up</button>
                </div>
            </div>
          
        </div>
        
        </div>
    )
}
