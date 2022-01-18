import Saludo from "./Saludo"

import {Routes, Route} from "react-router-dom"
import ItemListContainer from "../ItemListContainer"
import ItemDetailContainer from "../ItemDetailContainer"
import Cart from "./Cart"


function Home (){
    return (<main id="seccionSaludo">
        <Routes>
            <Route path="/" element={<Saludo/>}/>
            <Route path="/productos/" element={<ItemListContainer/>}/>
            <Route path="/productos/:tipo" element={<ItemListContainer/>}/>
            <Route path="/item/:id" element={<ItemDetailContainer/>}/>
            <Route path="/cart" element={<Cart/>}/>
        </Routes>
    </main>)
}

export default Home