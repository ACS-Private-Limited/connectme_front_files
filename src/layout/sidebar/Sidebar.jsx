import "./sidebar.css"
import { useEffect, useState} from "react";
import RssFeedIcon from '@mui/icons-material/RssFeed';
import ChatIcon from '@mui/icons-material/Chat';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import GroupsIcon from '@mui/icons-material/Groups';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import WorkIcon from '@mui/icons-material/Work';
import EventIcon from '@mui/icons-material/Event';
import SchoolIcon from '@mui/icons-material/School';
import Friend from "../friend/Friend";

export default function Sidebar() {
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
    <div className="sidebar"> 
        <div className="sidebarWrapper">
            <ul className="sidebarList">
                <li className="sidebarListItem">
                    <RssFeedIcon classname="sidebarIcon"/>
                    <span className="sidebarListItemText">Feed</span>
                </li>
                <li className="sidebarListItem">
                    <ChatIcon classname="sidebarIcon"/>
                    <span className="sidebarListItemText">Chat</span>
                </li>
                <li className="sidebarListItem">
                    <PlayCircleIcon classname="sidebarIcon"/>
                    <span className="sidebarListItemText">Videos</span>
                </li>
                <li className="sidebarListItem">
                    <GroupsIcon classname="sidebarIcon"/>
                    <span className="sidebarListItemText">Groups</span>
                </li>
                
                <li className="sidebarListItem">
                    <BookmarkIcon classname="sidebarIcon"/>
                    <span className="sidebarListItemText">Bookmarks</span>
                </li>
                <li className="sidebarListItem">
                    <HelpOutlineIcon classname="sidebarIcon"/>
                    <span className="sidebarListItemText">Questions</span>
                </li>
                <li className="sidebarListItem">
                    <WorkIcon classname="sidebarIcon"/>
                    <span className="sidebarListItemText">Jobs</span>
                </li>
                <li className="sidebarListItem">
                    <EventIcon classname="sidebarIcon"/>
                    <span className="sidebarListItemText">Events</span>
                </li>
                <li className="sidebarListItem">
                    <SchoolIcon classname="sidebarIcon"/>
                    <span className="sidebarListItemText">Courses</span>
                </li>
            </ul>
            <button className="sidebarButton">Show More</button>
            <hr className="sidebarHr" />
            <ul className="sidebarFriendList">
                {user.map((p) => (
                    <Friend key={p.id} post = {p} />
                ))}
             {/*   <li classname="sidebarFriend">
                    <img className="sidebarFriendImg" src="/assets/image3.jpg" alt=""/>
                    <span className="sidebarFriendName">Jane</span>
                </li>
                <li classname="sidebarFriend">
                    <img className="sidebarFriendImg" src="/assets/image2.jpg" alt=""/>
                    <span className="sidebarFriendName">Jane</span>
                </li>
                <li classname="sidebarFriend">
                    <img className="sidebarFriendImg" src="/assets/image3.jpg" alt=""/>
                    <span className="sidebarFriendName">Jane</span>
                </li>
                <li classname="sidebarFriend">
                    <img className="sidebarFriendImg" src="/assets/image4.jpg" alt=""/>
                    <span className="sidebarFriendName">Jane</span>
                </li>
                <li classname="sidebarFriend">
                    <img className="sidebarFriendImg" src="/assets/image5.jpg" alt=""/>
                    <span className="sidebarFriendName">Jane</span>
                </li> */}
            </ul>
        </div>
    </div>
  )
}


