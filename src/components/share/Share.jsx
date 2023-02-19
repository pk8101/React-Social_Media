import './share.css';
import {PermMedia,EmojiEmotions,LocationOn,Label} from "@mui/icons-material"

export default function Share() {
  return (
    <div className='share'>
        <div className="shareWrapper">
          <div className="shareTop">
            <img src="./logos/luffy.jpg" alt="" className="shareImg" />
            <input type="text" placeholder="What's in your mind ?"className="shareInput" />
          </div>
          <hr className="shareHr" />
          <div className="shareBottom">
            <div className="shareOptions">
              <div className="shareoption">
                <PermMedia htmlColor='blue'className='shareIcon'/>
                <span className="shareOptionText">Photo or Video</span>
              </div>
              <div className="shareoption">
                <Label htmlColor='black' className='shareIcon'/>
                <span className="shareOptionText">Tag</span>
              </div>
              <div className="shareoption">
                <EmojiEmotions htmlColor='grey' className='shareIcon'/>
                <span className="shareOptionText">Reaction</span>
              </div>
              <div className="shareoption">
                <LocationOn htmlColor='red' className='shareIcon'/>
                <span className="shareOptionText">Location</span>
              </div>
            </div>
            <button className="shareButton">Share</button>
          </div>
        </div>
        
    </div>
  )
}
