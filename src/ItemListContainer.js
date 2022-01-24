
import { useEffect, useState } from "react"
import ItemList from "./componentes/ItemList"
import { useParams } from "react-router-dom"
import { db } from "./firebase"
import {collection, getDocs, where, query} from "firebase/firestore"



function ItemListContainer (){

    let [productos, setProductos] = useState([])
    let [cargando, setCargando] = useState(true)
    let {categoria} = useParams()

    useEffect(() => {
        const productosColeccion = collection(db, "productos")
        if(categoria){
            const filtro = where("categoria", "==", categoria)
            const consulta = query(productosColeccion, filtro)
            const pedido = getDocs(consulta)
            pedido 
                .then((res) => {
                    setProductos(res.docs.map(doc => ({id: doc.id, ...doc.data()})))
                    setCargando(false)
                }
                )
        }else{
            const pedido = getDocs(productosColeccion)
            pedido
                .then((resultado) => {
                    const docs = resultado.docs
                    const productosFormateados = docs.map((doc) => {
                            const producto = {
                                id : doc.id,
                                ...doc.data()
                            }
                            return producto
                    })
                    setProductos(productosFormateados)
                    setCargando(false)
                })
                .catch(() => {
                    alert("Algo fallo")
                })
        }


    }, [categoria])

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