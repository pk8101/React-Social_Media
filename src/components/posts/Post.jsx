import './post.css'
import {MoreVert} from '@mui/icons-material'

export default function Post() {
  return (
    <div className='post'>
       <div className="postwrapper">
        <div className="posttop">
          <div className="posttopleft">
            <img src="logos/luffy.jpg" alt="" className="postimg" />
            <span className="postusername">Monkey D.luffy</span>
            <span className="postdate">5 min ago</span>
          </div>
          <div className="posttopright">
          <MoreVert/>
          </div>
        </div>
        <div className="postcenter">
          <span className="posttext">Heyy! it's my first post :)</span>
          <img src="\logos\0b7927979308fa35d1bbd315767e9078.png" alt="" className="postimage" />
        </div>
        <div className="postbottom">
          <div className="postbottomleft">
            <img src="logos/heart.png" alt="" className="likeicon" />
            <img src="logos/like.png" alt="" className="likeicon" />
            <span className="postlikecounter">32 people liked it</span>
          </div>
          <div className="postbottomright">
            <span className="postcommenttext">9 Comments</span>
          </div>
        </div>
       </div>
    </div>
  )
}
