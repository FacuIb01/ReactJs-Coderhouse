
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import ItemDetail from "./componentes/ItemDetail"


let array =  [{id: 0,tipo:"mancuernas", producto: "mancuerna", precio: 50, img: "../imagenes/pesas.png", stock:5, initial:2},{id: 1, producto: "pesas", precio: 50, img: "../imagenes/pesas.png", stock:5, initial:2},{id: 2,tipo:"Barras", producto: "barra", precio: 50, img: "../imagenes/pesas.png", stock:5, initial:2}]

function ItemDetailContainer () {
    let [productoDetail, setProductoDetail] = useState({})
    let [cargando, setCargando] = useState(true)
    let {id} = useParams()


    
    useEffect(()=> {
            let resultado = new Promise ((res,rej) => {
            setTimeout(() =>{
                res(array[id])
            }, 2000)
            })
            resultado.then((res)=>{
                setProductoDetail(res)
                setCargando(false)
            })
        }
)
    

    if(cargando){
        return (
            <section id="ItemDetailContainer">
                <p className="cargando">Cargando...</p>
            </section>
        )

    }else{
    return (<section id ="ItemDetailContainer">
        <ItemDetail item= {productoDetail}/>
    </section>)}
}

export default ItemDetailContainer