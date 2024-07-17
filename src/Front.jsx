import fronticon from "./assets/fronticon.png"
import logo from "./assets/logo.png"
import { Link } from "react-router-dom"
export function Front(){
    return <div id="frontcontainer">
        <Link to="catalog/services">
            <div id="logo">
                <img  id="fronticon" src={fronticon} alt="" />
                <img id="logoicon" src={logo} alt="" />
                        </div>
        </Link>
        
    </div>
}