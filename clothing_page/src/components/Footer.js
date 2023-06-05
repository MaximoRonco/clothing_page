import React from 'react'
import "../assets/css/Footer.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faInstagram, faTwitter, faFacebook} from '@fortawesome/free-brands-svg-icons'

export default function Footer() {
    return (
        <div id='footer'>
            <div className='col-footer'><h3>SUCCESS</h3><div id='social-networks'><FontAwesomeIcon className='social' icon={faFacebook} style={{color: "#ffffff",}} /><FontAwesomeIcon className='social' icon={faTwitter} style={{color: "#ffffff",}} /><FontAwesomeIcon  className='social' icon={faInstagram} style={{color: "#ffffff",}} /></div></div>
            <div className='col-footer'><span>Shop</span><p>Home</p><p>Men</p><p>Women</p><p>Contact</p></div>
            <div className='col-footer'><span>Links</span><p>Sport</p><p>Casual</p><p>Collaboration</p></div>
            <div className='col-footer'><span>Contact</span><p>3572333223</p><p>success@gmail.com</p><p>123 Main Street Miami, FL 33101</p></div>
        </div>
    )
}
