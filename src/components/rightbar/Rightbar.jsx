import "./rightbar.css"

export default function rightbar() {
  return (
    <div className="rightbar">
      <div className="rightbarwrapper">
        <div className="birthdaycontainer">
          <img src="logos/birthday.avif" alt="" className="birthdayimg" />
          <span className="birthdaytext">
            <b>Pola Foaster</b> and <b>3 Others Friends</b> have a birthdat today
          </span>
        </div>
        <img src="logos/birthday1.jpg" alt="" className="rightad" />
        <h4 className="rightbartitle">Online friends</h4>
        <ul className="rightbarfriendlist">
          <li className="rigthbarfriend">
            <div className="rightbarprofileimgcontainer">
              <img src="logos/madara.jpg" alt="" className="rightbarprofileimg" />
              <span className="rightbaronline"></span>
            </div>
            <span className="rightbarusername">Madara</span>
          </li>
          <li className="rigthbarfriend">
            <div className="rightbarprofileimgcontainer">
              <img src="logos/naruto.jpg" alt="" className="rightbarprofileimg" />
              <span className="rightbaronline"></span>
            </div>
            <span className="rightbarusername">naruto</span>
          </li>
          <li className="rigthbarfriend">
            <div className="rightbarprofileimgcontainer">
              <img src="logos/sasukea.jpeg" alt="" className="rightbarprofileimg" />
              <span className="rightbaronline"></span>
            </div>
            <span className="rightbarusername">sasukea</span>
          </li>
          <li className="rigthbarfriend">
            <div className="rightbarprofileimgcontainer">
              <img src="logos/uchiha.jpg" alt="" className="rightbarprofileimg" />
              <span className="rightbaronline"></span>
            </div>
            <span className="rightbarusername">itachi</span>
          </li>
          <li className="rigthbarfriend">
            <div className="rightbarprofileimgcontainer">
              <img src="logos/madara.jpg" alt="" className="rightbarprofileimg" />
              <span className="rightbaronline"></span>
            </div>
            <span className="rightbarusername">Zoro</span>
          </li>
        </ul>

      </div>
    </div>
  )
}
