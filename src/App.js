import Header from "./Header";
import Home from "./componentes/Home"
import ItemListContainer from "./ItemListContainer";

function App(){
    return (<>
        <Header/>
        <Home/>
        <ItemListContainer greetings={"Bienvenido!"}/>
    </>)

}

export default App