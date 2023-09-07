import { NavigateBeforeRounded } from "@mui/icons-material"
import Feed from "../../layout/feed/Feed"
import Rightbar from "../../layout/rightbar/Rightbar"
import Sidebar from "../../layout/sidebar/Sidebar"
import Navbar from '../../layout/NavBar1';
import "./profile.css"

export default function Profile() {
  return (
    
         <>
        <Navbar />
        <div className='profile'>
            <Sidebar />
            <div className="profileRight">
                <div className="profileRightTop">
                    <div className="profileCover">
                    <img className="profileCoverImg" src="/assets/nature.jpg" alt="" />
                    <img className="profileUserImg" src="/persons/person4.jpg" alt="" />
                    </div>
                <div className="profileInfo">
                    <h4 className="profileInfoName">Vasugi</h4>
                    <span className="profileInfoDesc">Hello Everyone!!</span>    
                </div> 
                </div>
                <div className="profileRightBottom">
                <Feed />
                <Rightbar profile/>
                </div>
            
            
            </div>
        </div>
        
        </>
    
  )
}

