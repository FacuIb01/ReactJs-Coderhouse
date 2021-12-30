
import { useState } from "react"
import ItemDetail from "./ItemDetail"


let pesas = [{id: 1, nombre: "Mancuerna Regulable", detail: "Mancuernas con peso regulable y trabas incluidas, salidas de fabrica.", img: "../imagenes/pesas.png", precio: 500 }]

function ItemDetailContainer () {
    let [productoDetail, setProductoDetail] = useState([])

    const getItem = () => {
        let resultado = new Promise ((res,rej) => {
        setTimeout(() =>{
            res(pesas)
        }, 2000)
        })
        resultado.then(()=>{
            setProductoDetail(pesas)
        })
    }

    getItem()

    return (<section id ="ItemDetailContainer">
        <ItemDetail item= {productoDetail}/>
    </section>)
}

export default ItemDetailContainer