import './Home.css'
import Topbar from '../components/topbar/Topbar'
import Sidebar from '../components/sidebar/Sidebar'
export default function Home() {
  return (
    <>
      <Topbar/>
      <div className="bodyContainer">
        <Sidebar/>
      </div>
      
    </>
  )
}
