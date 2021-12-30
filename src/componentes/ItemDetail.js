import ItemCount from "./ItemCount"

function ItemDetail ({item}) {
    let producto = item.map((e) => {
        return (<div key={e.id} className="itemDetail">
            <div className="divImgDetail">
                <img src={e.img} alt={e.nombre} className="imgDetail"/>
            </div>
            <div className="detail">
            <h2 className="detailTitulo">{e.nombre}</h2>
            <p className="detailText">{e.detail}</p>
            <p className="precio">${e.precio}</p>
            <ItemCount stock={5} initial={1} onAdd={(numero)=>{alert(`se agrego ${numero} producto/s al carrito`)}}/>
            </div>
        </div>)
    })

    return (<>
    {producto}
    </>)
}

export default ItemDetail