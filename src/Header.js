function Header (){
    return (<header>
        <a href="/" className="logo">OverPowerStore</a>
        <nav>
            <ul className="navUl">
                <a href="/"><li className="home"><ion-icon name="home-outline"size="large"></ion-icon></li></a>
                <a href="/"><li className="tienda"><ion-icon name="barbell-outline" size="large"></ion-icon></li></a>
                <a href="/"><li className="carrito"><ion-icon name="cart-outline"size="large"></ion-icon></li></a>
            </ul>
        </nav>
    </header>)
}

export default Header