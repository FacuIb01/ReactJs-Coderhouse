import ItemCount from "./ItemCount"

function Item ({productos}) {

    let mapeo = productos.map((e)=>{
        return (<div className="producto"><div key={e.id} className="detalle">
            <h2>{e.producto}</h2>
            <img src={e.img} alt="" className="imgProducto"/>
            <p>${e.precio}</p>
        </div>
            <ItemCount/>
        </div>)})


    return (<>
        {mapeo}
    </>)

}

export default Item