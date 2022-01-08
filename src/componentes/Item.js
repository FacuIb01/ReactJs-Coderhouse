function Item ({productos}) {
    let {id, producto, img, precio} = productos
    return (<>
        <div className="producto">
            <div key={id} className="detalle">
                <h2>{producto}</h2>
                <img src={img} alt="" className="imgProducto"/>
                <p>${precio}</p>
            </div>
        </div>
        </>
        )}

export default Item