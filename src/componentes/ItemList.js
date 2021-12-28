
import { useState } from "react"
import Item from "./Item"


let array =  [{id: 1, producto: "pesas", precio: 50, img: "../imagenes/pesas.jpg"}]


function ItemList () {
    let [productos, setProductos] = useState([])
    let promesa = new Promise((res, rej) => {
        setTimeout(() => {
            res(array)
        },2000)
    })
    promesa.then(()=>{
        setProductos(array)
    })

    return(<>
        <Item productos={productos}/>
    </>)

}

export default ItemList