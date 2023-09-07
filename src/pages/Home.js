import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link, useParams }  from "react-router-dom";
import Navbar from '../layout/NavBar1';
import Sidebar from '../layout/sidebar/Sidebar';
import Feed from '../layout/feed/Feed';
import Rightbar from '../layout/rightbar/Rightbar';
import "./home.css"

export default function Home() {

    return(
        <>
        <Navbar/>
        <div className='homeContainer'>
            <Sidebar/>
            <Feed />
            <Rightbar />
        </div>
        
        </>

    )
  
    /*const [users, setUsers] = useState([]);

    const {id}=useParams()
    useEffect(() => {
        loadUsers();
    }, []);
    
    const loadUsers = async () => {
        const result = await axios.get("http://localhost:8080/users");
       setUsers(result.data);
      //console.log(result.data);
    };

    const deleteUser=async(id)=>{
        await axios.delete(`http://localhost:8080/user/${id}`)
        loadUsers();
    }
    
    return (
    <div className='container'>
        <div className='py-4'>
        <table className="table border shadow">
        <thead>
            <tr>
                 <th scope="col">#</th>
                 <th scope="col">First</th>
                 <th scope="col">Last</th>
                 <th scope="col">Email</th>
                 <th scope="col">Action</th>
            </tr>
        </thead>
        <tbody>
            {users.map((user, index) => (
                <tr>
                      <th scope="row" key={index}>
                        {index + 1}
                      </th>
                      <td>{user.name}</td>
                      <td>{user.username}</td>
                      <td>{user.email}</td>
                      <td>
                            <Link className="btn btn-primary mx-2" to={`/viewuser/${user.id}`}> View </Link>
                            <Link className="btn btn-outline-primary mx-2" to={`/edituser/${user.id}`}>Edit</Link>
                            <button className="btn btn-danger mx-2" onClick={()=>deleteUser(user.id)}>Delete</button>

                      </td>
                </tr>
             ))}
        </tbody>
        </table>
        </div>
    </div>
    );*/
}
