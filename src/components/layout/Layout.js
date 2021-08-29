import MainNavigation from "./MainNavigation";
import "./Layout.moudle.css"
function Layout(props){
return <div className="main">
<MainNavigation/>
<main> {props.children} </main>

</div> 
  
}

export default Layout;