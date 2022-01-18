import { contexto } from "./miContexto"

import { Link } from "react-router-dom"
import { useContext } from "react"

function CartWidget (){
    let {carrito} = useContext(contexto)
    return(
        <Link to={"/cart"}>
            <a href="/"><li className="carrito"><ion-icon name="cart-outline"size="large"></ion-icon><span id="numeroCarrito">{carrito.length}</span></li></a>
            </Link>
    )
}

export default CartWidget