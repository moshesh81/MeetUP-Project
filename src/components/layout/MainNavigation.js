import {Link} from "react-router-dom"
import "./MainNavigation.moudle.css";

function MainNavigation(){
  return (
    <header className="header">
      <div className="logo"> react meetsups</div>
      <nav>
        <ul>
          <li> <Link to ="/">All MeetUps</Link></li>  
          <li><Link to ="favorites">Favorites MeetUps</Link></li>
          <li><Link to ="new-meets">New MeetUp</Link></li>
        </ul>
      </nav>
    </header>
  )
  }

export default MainNavigation;