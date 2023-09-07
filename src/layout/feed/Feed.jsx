import Post from "../post/Post"
import Share from "../share/Share"
import "./feed.css"
import { useEffect, useState} from "react";

export default function Feed() {
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
    
    <div className="feed">
        <div className="feedWrapper">
           <Share />
           {user.map((p) => (
            <Post key={p.id} post = {p} />
           ))}
           
           
        </div>
    </div>
  );
}
