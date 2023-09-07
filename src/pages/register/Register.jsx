import "./register.css"
import { useState } from "react"
import React from 'react'
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

export default function Register() {
  const navigate = useNavigate();
    const[fullname, setFullname] = useState('');
    const[email, setEmail] = useState('');
    const[password, setPassword] = useState('');
    const[username, setUsername] = useState('');
    const[gender, setGender] = useState('');
    const[dob, setDob] = useState('');
    const[address, setAddress] = useState('');
   /* const [ruser,setUser]=useState({
        fullname:"",
        email:"",
        password:"",

        username:"",
        gender:"",
        dob: new Date(),
        address:""
    })*/

    

   /* const onInputChange=(e)=>{
        setUser(e.target.value)
    }*/
    function handleClick(e) {
     const ruser= {fullname,email,password,username,gender,dob,address}
    e.preventDefault();
    fetch('http://localhost:8080/reguser', {
    method: 'POST', 
    mode: 'cors', 
    headers: { 'Accept': 'application/json',
    'Content-Type': 'application/json'  
},
   body: JSON.stringify(ruser) 
  })
  console.log(ruser.fullname,ruser.email,ruser.username,ruser.dob,ruser.address,ruser.gender);
  alert("Registered Successfully !!! Click Login to Continue");
}
  
       function handleLogin(){
          navigate("/login")
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
          <form>
          <div className="loginRight">
         
            <div className="loginBox">
            
                <input type={"text"} placeholder="Fullname" className="loginInput" value={fullname} 
                     onChange={(e)=>setFullname(e.target.value)}/>
               
                <input type={"text"} placeholder="Email" className="loginInput" value={email} 
                     onChange={(e)=>setEmail(e.target.value)}/>
                <input type={"password"}placeholder="Password" className="loginInput" value={password} 
                     onChange={(e)=>setPassword(e.target.value)}/>
                <input type={"text"} placeholder="Username" className="loginInput" value={username} 
                     onChange={(e)=>setUsername(e.target.value)}/>
                <input type={"text"}  placeholder="Gender" className="loginInput" value={gender} 
                     onChange={(e)=>setGender(e.target.value)}/>
                <input type={"datetime-local"} placeholder="DOB - YYYY-MM-DD" className="loginInput" value={dob} 
                     onChange={(e)=>setDob(e.target.value)}/>
                <input type={"text"} placeholder="Address" className="loginInput" value={address} 
                     onChange={(e)=>setAddress(e.target.value)}/>
                
                <button  onClick={(e) => handleClick(e)} className="registerButton">Register</button>
                <button className="loginButton" onClick={handleLogin}>Login</button>
               
            </div>
            
         </div>
         </form>  
        </div>    
    </div>
  )
}

