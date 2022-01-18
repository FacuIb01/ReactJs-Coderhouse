import Header from "./Header";
import Home from "./componentes/Home"
import { BrowserRouter } from "react-router-dom";
import "./index.css"
import CustomProvider from "./componentes/miContexto";


function App(){
    return (
    <CustomProvider>
        <BrowserRouter>
            <Header/>
            <Home/>
        </BrowserRouter>
        </CustomProvider>
        )

}

export default App