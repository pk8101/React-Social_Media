import "./sidebar.css";
import {RssFeed,Event,Feed,School,HelpOutline,WorkOutline} from "@mui/icons-material"

export default function Sidebar() {
  return (
    <div className="sidebar">
        <div className="sidebarWrapper">
          <ul className="listItems">
            <li className="listItem">
              <RssFeed className="sidebarIcon"/>
              <span className="listitemText">FEED</span>
            </li>
            <li className="listItem">
              <HelpOutline className="sidebarIcon" />
              <span className="listitemText">HELPOUTLINE</span>
            </li>
            <li className="listItem">
              <WorkOutline className="sidebarIcon" />
              <span className="listitemText">WORKOUTLINE</span>
            </li>
            <li className="listItem">
              <School className="sidebarIcon" />
              <span className="listitemText">SCHOOL</span>
            </li>
            <li className="listItem">
              <Feed className="sidebarIcon" />
              <span className="listitemText">FEED</span>
            </li>
            <li className="listItem">
              <Event className="sidebarIcon" />
              <span className="listitemText">EVENT</span>
            </li>
          </ul>
          <button className="sidebarButton">Show More</button>
          <hr className="sidebarHr"/>
          <ul className="sidebarFriendList">
            <li className="sidebarFriend">
              <img src="./logos/naruto.jpg" alt="" className="sidebarFriendImg" />
              <span className="sidebarFriendName">Naruto</span>
            </li>
            <li className="sidebarFriend">
              <img src="./logos/madara.jpg" alt="" className="sidebarFriendImg" />
              <span className="sidebarFriendName">Madara</span>
            </li>
            <li className="sidebarFriend">
              <img src="./logos/uchiha.jpg" alt="" className="sidebarFriendImg" />
              <span className="sidebarFriendName">Itach</span>
            </li>
            <li className="sidebarFriend">
              <img src="./logos/sasukea.jpeg" alt="" className="sidebarFriendImg" />
              <span className="sidebarFriendName">Sasukea</span>
            </li>
            <li className="sidebarFriend">
              <img src="./logos/naruto.jpg" alt="" className="sidebarFriendImg" />
              <span className="sidebarFriendName">Naruto</span>
            </li>
            <li className="sidebarFriend">
              <img src="./logos/madara.jpg" alt="" className="sidebarFriendImg" />
              <span className="sidebarFriendName">Madara</span>
            </li>
            <li className="sidebarFriend">
              <img src="./logos/uchiha.jpg" alt="" className="sidebarFriendImg" />
              <span className="sidebarFriendName">Itach</span>
            </li>
            <li className="sidebarFriend">
              <img src="./logos/sasukea.jpeg" alt="" className="sidebarFriendImg" />
              <span className="sidebarFriendName">Sasukea</span>
            </li>
            
          </ul>
        </div>
    </div>
  )
}
