import Header from "./Header";
import Home from "./componentes/Home"
import { BrowserRouter } from "react-router-dom";
import "./index.css"
import CustomProvider from "./componentes/miContexto";
import { ToastContainer } from 'react-toastify';


function App(){
    return (
    <CustomProvider>
        <BrowserRouter>
            <Header/>
            <Home/>
            <ToastContainer autoClose={2000}/> 
        </BrowserRouter>
        </CustomProvider>
        )

}

export default App