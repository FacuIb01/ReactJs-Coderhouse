import { createContext, useState } from "react";
import { toast } from "react-toastify";


export const contexto = createContext()
const { Provider } = contexto

function CustomProvider ({children}) {


    const [carrito, setCarrito] = useState([])
    
    const [precio_total, setPrecio_total] = useState(0)
    
    
    
    const isInCart = (item) => {
        let busqueda = carrito.find((e)=> e.producto === item.producto)
        return busqueda
    }
    
    const agregarProducto = (item) => {
        if(isInCart(item) === undefined){
            setCarrito([...carrito, item])
            setPrecio_total(precio_total + item.valorFinal)
            toast.success(`Se agrego el producto al carrito`)
        }else{
            toast.warning("Este producto ya fue agregado al carrito.")
        }
    }

    const eliminarDelCarrito = (index) => {
        let copia = carrito.slice()
        setPrecio_total(precio_total - copia[index].valorFinal)
        copia.splice(index,1)
        setCarrito([...copia])
    }

    const vaciarCarrito = () => {
        setCarrito([])
    }
    

    const valorContexto = {
        carrito,
        precio_total,
        agregarProducto,
        vaciarCarrito,
        eliminarDelCarrito,
    }
    return(
        <Provider value={valorContexto}>
            {children}
        </Provider>
    )
}

export default CustomProvider