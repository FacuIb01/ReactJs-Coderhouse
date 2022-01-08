import Header from "./Header";
import Home from "./componentes/Home"
//import ItemListContainer from "./ItemListContainer";
//import ItemDetailContainer from "./ItemDetailContainer"

import { BrowserRouter } from "react-router-dom";

import "./index.css"

//<ItemListContainer/>
function App(){
    return (<>
        <BrowserRouter>
            <Header/>
            <Home/>
        </BrowserRouter>
        </>)

}

export default App