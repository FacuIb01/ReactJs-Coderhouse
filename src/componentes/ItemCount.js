import { useState } from "react"

function ItemCount ({stock, initial, onAdd}){


    let [numero, setInitial] = useState(initial)

    const incrementar = () => {
        if(numero === stock){
            alert("No podes comprar más")
        }else{
            setInitial(numero + 1 )
        }
    }
    const disminuir = () => {
        if(numero === 0){
            alert("los numero negativos no existen")
        }else{
            setInitial(numero - 1 )
        }
    }

    const confirmacionCantidad = () => {
        if(stock > 0){
            if(numero >= 1){
                onAdd(numero)
                setInitial(initial)
            }else{
                alert("No es posible agregar 0 productos")
            }
        }else{
            alert("No hay stock del producto")
        }
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