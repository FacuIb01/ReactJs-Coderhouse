import ItemCount from "./componentes/ItemCount"


function Productos (){
    return (<section id="productos">
        <div id="divProductos">
            <ItemCount stock={10} initial={1}/>
        </div>
    </section>)


}

export default Productos