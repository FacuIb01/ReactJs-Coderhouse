
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import ItemDetail from "./componentes/ItemDetail"
import { db } from "./firebase"
import {getDoc, doc, collection} from "firebase/firestore"


function ItemDetailContainer () {
    const [productoDetail, setProductoDetail] = useState({})
    const [cargando, setCargando] = useState(true)
    const {id} = useParams()

    useEffect(()=> {
        const productosColeccion = collection(db, "productos")
        const referencia = doc(productosColeccion, id)
        const producto = getDoc(referencia)
        producto
                .then((res) => {
                    setProductoDetail(res.data())
                    setCargando(false)
                })
                .catch((error) => {
                    console.log(error)
                })

        }
)

        return(
            <section id="ItemDetailContainer">
                {cargando ? <p className="cargando">Cargando...</p>:<ItemDetail item= {productoDetail}/>}
            </section>
        )
}

export default ItemDetailContainer