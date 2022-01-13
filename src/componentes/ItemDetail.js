import { Link } from "react-router-dom"
import { useState } from "react/cjs/react.development"
import ItemCount from "./ItemCount"

function ItemDetail ({item}) {


    const [count, setCount] = useState(true)

    let e = item


    const onAdd = (cosas) => {
        setCount(false)
    }

    return (<>
    <div key={e.id} className="itemDetail">
            <div className="divImgDetail">
                <img src={e.img} alt={e.producto} className="imgDetail"/>
            </div>
            <div className="detail">
            <h2 className="detailTitulo">{e.producto}</h2>
            <p className="detailText">{e.detail}</p>
            <p className="precio">${e.precio}</p>
            {count ? <ItemCount stock={e.stock} initial={e.initial} onAdd={onAdd}/> : <Link to={"/cart"} className="finalizarCompra">Finalizar Compra</Link>}
            </div>
        </div>

    </>)
}

export default ItemDetail