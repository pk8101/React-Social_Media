import "./topbar.css"
import {Search,Person,Chat,Notifications} from "@mui/icons-material"

export default function Topbar() {
  return (
    <div className="topbarContainer">
      <div className="topbarLeft">
        <div className="logo">
          letsPingSocial
        </div>
      </div>
      <div className="topbarCenter">
        <div className="searchBar">
          <Search className="searchIcon"/>
          <input placeholder="Search or friends ,Posts" className="searchInput"/>
        </div>
      </div>
      <div className="topbarRight">
        <div className="topbarLinks">
          <span className="topbarLInk">Homepage</span>
          <span className="topbarLInk">TimeLine</span>
        </div>
        <div className="topbarIcons">
          <div className="topbaricon">
            <Person/>
          </div>
          <div className="topbaricon">
            <Chat/>
            </div>
          <div className="topbaricon">
            <Notifications/>
          </div>
        </div>
        <img src="./logos/luffy.jpg" alt="" className="topbarImg" />
       
      </div>

    </div>
  )
}
