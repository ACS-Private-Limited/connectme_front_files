import React from 'react'
import PermMediaIcon from '@mui/icons-material/PermMedia';
import "./share.css"
import { EmojiEmotions, LabelImportant, RoomOutlined } from '@mui/icons-material';
export default function Share() {
  return (
    <div className="share">
        <div className='shareWrapper'>
            <div className="shareTop">
               <img className="shareProfileImg" src="/assets/image4.jpg" alt =""/>  
                <input placeholder="What's in your mind?" className="shareInput"/>
            </div>
            <hr className='shareHr' />
            <div className='shareBottom'>
                <div className="shareOptions">
                    <div className="shareOption">
                    <PermMediaIcon htmlColor="tomato" className='shareIcon' />
                        <span className="shareOptionText"> Photo or Video</span>
                    </div>
                    <div className="shareOption">
                    <LabelImportant htmlColor="blue" className='shareIcon' />
                        <span className="shareOptionText"> Tag</span>
                    </div>
                    <div className="shareOption">
                    <RoomOutlined htmlColor="green" className='shareIcon' />
                        <span className="shareOptionText"> Location</span>
                    </div>
                    <div className="shareOption">
                    <EmojiEmotions htmlColor="goldenrod" className='shareIcon' />
                        <span className="shareOptionText"> Feelings</span>
                    </div>
                </div>
                <button className='shareButton'>Share</button>
            </div>
        </div>
    </div>
  )
}
