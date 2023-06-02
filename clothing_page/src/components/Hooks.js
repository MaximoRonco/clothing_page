import { useState, useEffect } from "react";

export default function Hooks() {
    const [cuenta, setCuenta] = useState(0)
    const handleClick = () =>{
        setCuenta(cuenta + 1)
    };
    useEffect(()=>{
        alert("Se agrego un producto al carrito")
    },[cuenta])
    return (
        <div>
            {cuenta > 1 ?(<h1>Carrito {cuenta} elementos</h1>):(<h1>Carrito {cuenta} elemento</h1>)}
            <button onClick={handleClick}>Agregar a Carrito</button>
        </div>
    )
}
