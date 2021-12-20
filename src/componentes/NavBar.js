import CartWidget from "./CartWidget"

function NavBar(){
    return(<nav>
        <a href="/" className="logo">OverPowerStore</a>
        <ul className="navUl">
            <a href="/"><li className="home"><ion-icon name="home-outline"size="large"></ion-icon></li></a>
            <a href="/"><li className="tienda"><ion-icon name="barbell-outline" size="large"></ion-icon></li></a>
            <CartWidget></CartWidget>
        </ul>
    </nav>)
}

export default NavBar