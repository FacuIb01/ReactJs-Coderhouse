import Saludo from "./Saludo"

import {Routes, Route} from "react-router-dom"
import ItemListContainer from "../ItemListContainer"
import ItemDetailContainer from "../ItemDetailContainer"

/*
Home



<Saludo/>

*/ 

function Home (){
    return (<main id="seccionSaludo">
        <Routes>
            <Route path="/" element={<Saludo/>}/>
            <Route path="/productos/" element={<ItemListContainer/>}/>
            <Route path="/productos/:tipo" element={<ItemListContainer/>}/>
            <Route path="/item/:id" element={<ItemDetailContainer/>}/>
            <Route path="/cart" element={<ItemDetailContainer/>}/>
        </Routes>
    </main>)
}

export default Home