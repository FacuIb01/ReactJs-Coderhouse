import { useContext } from "react"
import {contexto} from "./miContexto"


function Cart () {
    let {carrito, vaciarCarrito, precio_total,eliminarDelCarrito} = useContext(contexto)

    const eliminarProducto = (index) => {
        eliminarDelCarrito(index)
    }

    if(carrito.length ===0){
        return(
            <p>No hay nada en el carrito...</p>
        )
    }else{
    return(<>
            {carrito.map((e, index) => {
                return  <div key={e.id} className="detalleCarrito">
                            <img src={e.img} alt="" className="imgCarrito"/>
                            <h2>{e.producto}</h2>
                            <h2>{e.cantidad}</h2>
                            <h2>${e.valorFinal}</h2>
                            <p  className="borrar" onClick={() => {eliminarProducto(index)}}><ion-icon name="trash-outline"></ion-icon></p>
                        </div>
            })}

            <p onClick={vaciarCarrito}>Vaciar Carrito</p> <p>Precio total de la compra: ${precio_total}</p>
            </>
        )
    }
}

export default Cart