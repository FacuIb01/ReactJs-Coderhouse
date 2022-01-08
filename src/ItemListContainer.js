
import { useEffect, useState } from "react"
import ItemList from "./componentes/ItemList"
import { useParams } from "react-router-dom"


let array =  [{id: 0,tipo:"mancuernas", producto: "mancuerna", precio: 50, img: "../imagenes/pesas.png", stock:5, initial:2},{id: 1, producto: "pesas", precio: 50, img: "../imagenes/pesas.png", stock:5, initial:2},{id: 2,tipo:"Barras", producto: "barra", precio: 50, img: "../imagenes/pesas.png", stock:5, initial:2}]


function ItemListContainer (){

    let [productos, setProductos] = useState([])
    let [cargando, setCargando] = useState(true)
    let {tipo} = useParams()

    useEffect(() => {

        if(tipo === undefined){
            let promesa = new Promise((res, rej) => {
                setTimeout(() => {
                    res(array)
                },2000)
            })
            promesa.then((res)=>{
                setProductos(res)
                setCargando(false)
            })
            

        }else{
            let promesa = new Promise((res, rej) => {
                setTimeout(() => {
                    res(array)
                },2000)
                })
                promesa.then((res)=>{
                    let filtrado = res.filter(res => res.tipo === tipo)
                    setProductos(filtrado)
                    setCargando(false)
                })
        }

    }, [tipo])

    if(cargando){
        return(<section id="productos">
                <p className="cargando">Cargando...</p>
        </section>)
    }else{
    return (<section id="productos">
        <div id="divProductos">
            <ItemList prop={productos}/>
        </div>
    </section>)
    }

}

export default ItemListContainer