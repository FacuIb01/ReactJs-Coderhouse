import Header from "./Header";
import Home from "./componentes/Home"
import ItemListContainer from "./ItemListContainer";
import ItemDetailContainer from "./componentes/ItemDetailContainer"

function App(){
    return (<>
        <Header/>
        <Home/>
        <ItemListContainer greetings={"Bienvenido!"}/>
        <ItemDetailContainer></ItemDetailContainer>
    </>)

}

export default App