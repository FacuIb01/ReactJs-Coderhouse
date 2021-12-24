import ItemCount from "./componentes/ItemCount"


function Productos (){
    return (<section id="productos">
        <div id="divProductos">
            <ItemCount stock={10} initial={1} onAdd={(confirmacion) => {alert(`se agregaron ${confirmacion} producto/s al carrito`)}}/>
        </div>
    </section>)


}

export default Productos