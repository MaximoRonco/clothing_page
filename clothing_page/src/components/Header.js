import React from 'react'
import "../assets/css/Header.css"
import iconCart from "../assets/statics/shopping-bag64.png"
import logo from "../assets/statics/Logo-remove.png"
import { Link } from 'react-router-dom'


export default function Header() {
    
    return (
        <div id='style-header'>
            <img id="logo" src={logo} alt="" />
            <header>
            <ul>
                <li>
                <Link to='/' className='my-link'>Home</Link>
                </li>
                <li>
                <Link to='/men' className='my-link'>Men</Link>
                </li>
                <li>
                <Link to='/women' className='my-link'>Women</Link>
                </li>
                <li>
                <Link to='/contact' className='my-link'>Contact</Link>
                </li>
                <li>
                <Link to='/cart' className='my-link-cart'><img id="icon-cart" src={iconCart} alt="" /></Link>
                </li>
            </ul>
            </header>
        </div>
)
    }
