
import { useEffect, useState } from "react"
import ItemList from "./componentes/ItemList"
import { useParams } from "react-router-dom"
import { db } from "./firebase"
import {collection, getDocs, where, query} from "firebase/firestore"
import { toast } from "react-toastify"



function ItemListContainer (){

    let [productos, setProductos] = useState([])
    let [cargando, setCargando] = useState(true)
    let {categoria} = useParams()

    useEffect(() => {
        const productosColeccion = collection(db, "productos")
        let pedido 
        
        if(categoria){
            const filtro = where("categoria", "==", categoria)
            const consulta = query(productosColeccion, filtro)
            pedido = getDocs(consulta)
        }else{
            pedido = getDocs(productosColeccion)
        }

        pedido 
            .then((res) => {
                setProductos(res.docs.map(doc => ({id: doc.id, ...doc.data()})))
                setCargando(false)
            }
            )
            .catch((error) => {
                toast.error(error)
            })


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