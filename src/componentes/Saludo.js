import { useEffect, useState } from "react"
let i = 0
const saludos = ["Welcome!", "Bienvenido!", "Bienvenue!", "ようこそ!"]

function Saludo (){
    let [mostrarSaludos, setSaludos] = useState(saludos[0])

    
    
    useEffect(() => {
        setTimeout(() => {
            if(i === 3){
                i = 0
                setSaludos(saludos[i])
            }else{
                i = i +1
                setSaludos(saludos[i])
            }
        },3000);
        return function cleanup() {
            clearTimeout()
        }
    })

    return(<>
        <h1 id="greetings">{mostrarSaludos}</h1>
    </>
    )
}

export default Saludo