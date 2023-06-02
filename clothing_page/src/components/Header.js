import React from 'react'
import "../assets/css/Header.css"

export default function Header() {
    let llamanos = document.getElementById("llamanos")
    const handleClick = () =>{
        alert("Ouch")
    }
    return (
    <header>
        <ul>
            <a href='/'>Inicio</a>
            <a href='/men'>Men</a>
            <a href='/women'>Women</a>
            <a href='/contact'>Contact Us</a>
            <li><button id='llamanos' onClick={handleClick}>Llamanos</button></li>
        </ul>
    </header>
)
}
