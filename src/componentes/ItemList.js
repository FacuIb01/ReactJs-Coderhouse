import { Link } from "react-router-dom"
import Item from "./Item"

function ItemList ({prop}) {
    
    return(<>
    {prop.map((e) =>  {
        return <Link to={`/item/${e.id}`} key={e.id}><Item productos={e} /></Link>
        })

    }</>)

}

export default ItemList