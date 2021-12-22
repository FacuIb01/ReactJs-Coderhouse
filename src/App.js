import Header from "./Header";
import ItemListContainer from "./componentes/ItemListContainer"
import Productos from "./Productos";

function App(){
    return (<>
        <Header/>
        <ItemListContainer greetings={"Bienvenido!"}/>
        <Productos/>
    </>)

}

export default App