import { Link } from "react-router-dom"
import { Outlet } from "react-router-dom"
import logo from "./assets/logo.png"
export function Catalog(){
    return <div>
        <img   id="background" src={logo} alt="" />
        <div id="catalog">
        <Link to="services" className="catalog"> Services </Link>
        <Link to="facilities" className="catalog"> Facilities </Link>
        <Link to="feedback" className="catalog"> Feedback </Link>
        <Link to="contact" className="catalog">Contact Us </Link>
        </div>
        <Outlet/>
    </div>
}