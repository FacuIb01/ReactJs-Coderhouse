import { useContext } from "react"
import {contexto} from "./miContexto"
import { Link } from "react-router-dom"


function Cart () {
    let {carrito, vaciarCarrito, precio_total,eliminarDelCarrito} = useContext(contexto)

    const eliminarProducto = (index) => {
        eliminarDelCarrito(index)
    }

    if(carrito.length === 0){
        return(<>
        <p className="nadaCarrito">No hay nada en el carrito...</p>
            <Link to={"/productos/"} className="vamosDeCompras">Vamos de compras!</Link>
            </>
        )
    }else{
    return(<>
            {carrito.map((e, index) => {
                return  <div key={e.id} className="detalleCarrito">
                            <img src={e.img} alt="" className="imgCarrito"/>
                            <p className="detallePCarrito">{e.producto}</p>
                            <p className="detallePCarrito">Cantidad: {e.cantidad}</p>
                            <p className="detallePCarrito">${e.valorFinal}</p>
                            <p  className="borrar" onClick={() => {eliminarProducto(index)}}><ion-icon name="trash-outline"></ion-icon></p>
                        </div>
            })}

            <p onClick={vaciarCarrito} className="vaciarCarrito">Vaciar Carrito</p> <p className="precioTotal">Precio total de la compra: ${precio_total}</p>
            </>
        )
    }
}

export default Cart