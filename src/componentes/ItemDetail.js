import ItemCount from "./ItemCount"

function ItemDetail ({item}) {

    let e = item

    return (<>
    <div key={e.id} className="itemDetail">
            <div className="divImgDetail">
                <img src={e.img} alt={e.producto} className="imgDetail"/>
            </div>
            <div className="detail">
            <h2 className="detailTitulo">{e.producto}</h2>
            <p className="detailText">{e.detail}</p>
            <p className="precio">${e.precio}</p>
            <ItemCount stock={e.stock} initial={e.initial} onAdd={(numero)=>{alert(`se agrego ${numero} producto/s al carrito`)}}/>
            </div>
        </div>

    </>)
}

export default ItemDetail