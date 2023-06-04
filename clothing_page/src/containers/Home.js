import React from 'react'
import "../assets/css/Home.css"
import banner from "../assets/statics/banner-newArrival.png"
import banner_sale from "../assets/statics/banner-oferta.png"
import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons'


export default function Home() {
  const [mostrarBanner, setMostrarBanner] = useState(true);


  const nextBanner = () => {
    setMostrarBanner((prevMostrarBanner) => !prevMostrarBanner);
  };
  

  const backBanner = () => {
    setMostrarBanner((prevMostrarBanner) => !prevMostrarBanner);
  };
  

  // Cambiar el banner cada 5 segundos

  useEffect(() => {
    const cambiarBannerTimeout = setTimeout(() => {
      setMostrarBanner((prevState) => !prevState);
    }, 8000);

    return () => clearTimeout(cambiarBannerTimeout);
  }, [mostrarBanner]);

  return (
    <div>
      <div id='cont-banner'>
        {mostrarBanner ? (
          <div>
            <img id="banner" src={banner} alt="" />
            <button id='next-banner' onClick={nextBanner}><FontAwesomeIcon icon={faChevronRight}/></button>
            <button id='back-banner' onClick={backBanner}><FontAwesomeIcon icon={faChevronLeft}/></button>
          </div>
        ) : (
          <div>
            <img id="banner-sale" src={banner_sale} alt="" />
            <button id='next-banner' onClick={nextBanner}><FontAwesomeIcon icon={faChevronRight} style={{color: "#ffffff"}} /></button>
            <button id='back-banner' onClick={backBanner}><FontAwesomeIcon icon={faChevronLeft} style={{color: "#ffffff"}} /></button>
          </div>
        )}
    </div>
    <div id='products-featured'>
      <div className="cont-product">
        <div className='box-product'></div>
        <div className='box-product'></div>
        <div className='box-product'></div>
      </div>
      <div className="cont-product">
        <div className='box-product'></div>
        <div className='box-product'></div>
        <div className='box-product'></div>
      </div>
    </div>
  </div>
  )
}
