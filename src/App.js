
import Home from "./componentes/Home"
import { BrowserRouter } from "react-router-dom";
import "./index.css"
import CustomProvider from "./componentes/miContexto";
import { ToastContainer } from 'react-toastify';
import NavBar from "./componentes/NavBar";
import Footer from "./Footer";


function App(){
    return (
    <CustomProvider>
        <BrowserRouter>
            <NavBar/>
            <Home/>
            <Footer/>
            <ToastContainer autoClose={2000}/> 
        </BrowserRouter>
        </CustomProvider>
        )

}

export default App