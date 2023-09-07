import React from 'react'
import "./post.css"
import { MoreVert } from '@mui/icons-material'
export default function Post({post}) {
   //console.log(post);
  
    return (
    <div className='post'>
        <div className="postWrapper">
        <div className="postTop">
            <div className="postTopLeft">
                <img className="postProfileImage" src={post.image} alt=""/>
                <span className="postUsername">{post.name}</span>
                <span className="postDate">5 mins ago</span>
            </div>
            <div className="postTopRight">
                <MoreVert />
            </div>
        </div>
        <div className="postCenter">
            <span className="postText">Hey!! This is my first post</span><br/>
            <img className="postImg" src ="/assets/nature.jpg" alt=""/>
        </div>
        <div className="postBottom">
            <div className="postBottomLeft">
                <img className="likeimg" src="/assets/like.png" alt=""/>
                <img className="heartimg" src="/assets/heart.png" alt=""/>
                <span className="postLikeCounter">22 people liked it</span>
            </div>
            <div className="postBottomRight">
              <span className="postCommentText">10 Comments</span>
            </div>
        </div>
        </div>
        
    </div>
  )
}
