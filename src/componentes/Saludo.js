import { useState } from "react"
let i = 0
const saludos = ["Welcome!", "Bienvenido!", "Bienvenue!", "ようこそ!"]

function Saludo (){
    const [mostrarSaludos, setSaludos] = useState(saludos[0])

    
    setTimeout(() => {
        if(i === 3){
            i = 0
            setSaludos(saludos[i])
        }else{
            i = i +1
            setSaludos(saludos[i])
        }
    },3000);

    return(<>
        <h1 id="greetings">{mostrarSaludos}</h1>
    </>
    )
}

export default Saludo