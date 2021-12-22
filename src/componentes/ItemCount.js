import { useState } from "react"

function ItemCount ({stock, initial}){



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

    const onAdd = () => {
        if(numero === 0){
            alert("Debes agregar algo al carrito")
        }else{
            alert(`Agregaste ${numero} producto/s al carrito`)
            setInitial(0)
        }
    }






    return (
        <div id="ItemCount">
            <div className="botones"><button onClick={disminuir}><ion-icon size="large" name="remove-outline"></ion-icon></button>
            <span>{numero}</span>
            <button onClick={incrementar}><ion-icon size="large" name="add-outline"></ion-icon></button></div>
            <button className="add" onClick={onAdd}>Agregar</button>
        </div>
    )
}


export default ItemCount