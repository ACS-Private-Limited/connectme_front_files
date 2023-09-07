import "./rightbar.css"
import { useEffect, useState} from "react";
import Online from "../online/Online";

export default function Rightbar({profile}) {
  const [user, setUser] = useState([]);
  useEffect(() => {
    fetch("http://localhost:8080/users") // Replace with your API endpoint
      .then(response => {
        return response.json()
      })
      .then(data => {
              setUser(data)
      })
      
  }, []);
  return (
    
    <div className="rightbar">
       <div className="rightbarWrapper">
        <div className="birthdayContainer">
          <img className ="birthdayImg" src= "/assets/birthday.png" alt=""/>
          <span className="birthdayText"><b>Kishan</b> and <b>3 others</b> have a birthday today</span>
        </div>
        <img className="rightbarAd" src="assets/ad.png" alt=""/>
        <h4 className="rightbarTitle">Online Friends</h4>
        <ul className="rightbarFriendList">
          {/* <li className="rightbarFriend">
            <div className="rightbarProfileImgContainer">
              <img className="rightbarProfileImg" src="/persons/person1.jpg" alt=""/>
              <span className="rightbarOnline"></span>
            </div>
            <span className="rightbarUsername">Amy Jack</span>
          </li>
          <li className="rightbarFriend">
            <div className="rightbarProfileImgContainer">
              <img className="rightbarProfileImg" src="/persons/person2.png" alt=""/>
              <span className="rightbarOnline"></span>
            </div>
            <span className="rightbarUsername">John</span>
          </li>
          <li className="rightbarFriend">
            <div className="rightbarProfileImgContainer">
              <img className="rightbarProfileImg" src="/persons/person3.png" alt=""/>
              <span className="rightbarOnline"></span>
            </div>
            <span className="rightbarUsername">Jerry</span>
          </li>  */}
              {user.map((p) => (
            <Online key={p.id} post = {p} />
           ))}
        </ul>
       </div>
    </div>
  )
}
