import { Link } from "react-router-dom"
import { useState } from "react";
import CartWidget from "./CartWidget"

function NavBar(){

    const [isActive, setActive] = useState(false)

    const toggleClass = () => {
        setActive(!isActive);
    };

    return(
    <header>

    <nav>
        <Link to={"/"}><a href="/" className="logo">OverPowerStore</a></Link>
        <ul className="navUl">
            <Link to={"/"}><li className="home"><ion-icon name="home-outline"size="large"></ion-icon></li></Link>
            <Link to={"/productos"} className="linkLi"><li className="tienda" onMouseEnter={toggleClass} onMouseLeave={toggleClass}><ion-icon name="barbell-outline" size="large"></ion-icon>
            <ul className={isActive ? "dropDownActive": "dropDownDisabled"}>
                <Link to={"/productos/mancuernas"}><li className="dropDownLi">Mancuernas</li></Link>
                <Link to={"/productos/barras"}><li className="dropDownLi">Barras</li></Link>
                </ul>
            </li></Link>
            <CartWidget></CartWidget>
        </ul>
    </nav>
    </header>)
}

export default NavBar