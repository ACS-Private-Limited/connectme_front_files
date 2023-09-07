
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

import PersonIcon from '@mui/icons-material/Person';


import navbar from './layout/NavBar';

import Home from './pages/Home';
import AddUser from './users/AddUser'
import EditUser from "./users/EditUser";
import ViewUser from "./users/ViewUser";

import {BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from './layout/NavBar1';
import Profile from './pages/profile/Profile';
import Login from './pages/login/Login';
import Register from './pages/register/Register'
import { Connecthome } from './connecthome/Connecthome';

function App() {
  
  return (
    <div className="App">
    <Router>
     
      <Routes>
        <Route exact path="/" element={<Connecthome />}/>
         <Route exact path="/register" element={<Register />}/>
    
         <Route exact path="/login" element={<Login />}/>  
         <Route exact path="/home" element={<Home />}/>   
         
      </Routes>
    </Router>
    </div>
          )
          

  /* (
   <div className="App">
     <Router>
          <Navbar />
          <Routes>
            <Route exact path="/" element={<Home />}/>
            <Route exact path="/adduser" element={<AddUser />}/>
            <Route exact path="/edituser/:id" element={<EditUser />} />
            <Route exact path="/viewuser/:id" element={<ViewUser />} />
          </Routes> 
     
      </Router>  -->
      </div>  
  );*/
}

export default App;
