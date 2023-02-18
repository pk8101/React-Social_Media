import "./topbar.css"
import {Search,Person,Chat,Notifications} from "@mui/icons-material"

export default function Topbar() {
  return (
    <div className="topbarContainer">
      <div className="topbarLeft">
        <div className="logo">
          SocialRoute
        </div>
      </div>
      <div className="topbarCenter">
        <div className="searchBar">
          <Search className="searchIcon"/>
          <input placeholder="Search for friends, Posts" className="searchInput"/>
        </div>
      </div>
      <div className="topbarRight">
        <div className="topbarLinks">
          <span className="topbarLink">Homepage</span>
          <span className="topbarLink">TimeLine</span>
        </div>
        <div className="topbarIcons">
          <div className="topbaricon">
            <Person/>
            <span className="topbarIconBadges">1</span>
          </div>
          <div className="topbaricon">
            <Chat/>
            <span className="topbarIconBadges">4</span>
            </div>
          <div className="topbaricon">
            <Notifications/>
            <span className="topbarIconBadges">3</span>
          </div>
        </div>
        <img src="./logos/luffy.jpg" alt="" className="topbarImg" />
       
      </div>

    </div>
  )
}
