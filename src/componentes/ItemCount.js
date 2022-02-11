import { useState } from "react"
import { toast } from "react-toastify"

function ItemCount ({stock, initial, onAdd}){


    let [numero, setInitial] = useState(initial)

    const incrementar = () => {
        if(numero === stock){
            toast.error("Limite de stock alcanzado.")
        }else{
            setInitial(numero + 1 )
        }
    }
    const disminuir = () => {
        if(numero === 0){
            toast.error("No es posible ingresar esa cantidad")
        }else{
            setInitial(numero - 1 )
        }
    }

    const confirmacionCantidad = () => {
        onAdd(numero)
    }






    return (
        <div id="ItemCount">
            <div className="botones"><button onClick={disminuir}><ion-icon size="large" name="remove-outline"></ion-icon></button>
            <span>{numero}</span>
            <button onClick={incrementar}><ion-icon size="large" name="add-outline"></ion-icon></button></div>
            <button className="add" onClick={confirmacionCantidad}>Agregar</button>
        </div>
    )
}


export default ItemCount