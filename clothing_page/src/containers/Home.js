import React from 'react'
import "../assets/css/Home.css"
import banner from "../assets/statics/banner-newArrival.png"
import banner_sale from "../assets/statics/banner-oferta.png"
import nike_blz from "../assets/statics/nike-blzer.jpg"
import vans from "../assets/statics/vans-remove.png"
import adidas_blue from "../assets/statics/adidas_blue.jpg"
import nike_sombra from "../assets/statics/nike_sombra.jpg"
import botines from "../assets/statics/nike_botines.jpg"
import adidas_Cons from "../assets/statics/adidas_Consortium.jpg"
import nike_drift from "../assets/statics/nike_drift.jpg"
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
            <button className='buy_banner' style={{backgroundColor:"#859eb7", color:"white"}}>BUY NOW</button>
            <button id='next-banner' onClick={nextBanner}><FontAwesomeIcon icon={faChevronRight}/></button>
            <button id='back-banner' onClick={backBanner}><FontAwesomeIcon icon={faChevronLeft}/></button>
          </div>
        ) : (
          <div>
            <img id="banner-sale" src={banner_sale} alt="" />
            <button className='buy_banner'>BUY NOW</button>
            <button id='next-banner' onClick={nextBanner}><FontAwesomeIcon icon={faChevronRight} style={{color: "#ffffff"}} /></button>
            <button id='back-banner' onClick={backBanner}><FontAwesomeIcon icon={faChevronLeft} style={{color: "#ffffff"}} /></button>
          </div>
        )}
      </div>
    <div id='products-featured'>
      <h1>Featured products</h1>
      <div className="cont-product">
        <div className="background">
          <div className='box-product'><img src={nike_blz} alt="" /></div>
        </div>
        <div className="background">
          <div className='box-product'></div>
        </div>
        <div className="background">
          <div className='box-product'></div>
        </div>
      </div>
      <div className="cont-product">
          <div className="background">
            <div className='box-product'></div>
          </div>
          <div className="background">
            <div className='box-product'></div>
          </div>
          <div className="background">
            <div className='box-product'></div>
          </div>
      </div>
    </div>
    <div id='last-box'>
      <div id="child-last-box">
        <div id="cont-last-box">
          <h3>Latest stylish shoe</h3>
          <p>Men 2023 collection shoe</p>
          <button type="button" class="btn btn-primary">Check</button>
        </div>
        <img src={vans} alt="" />
      </div>
    </div>
    <div id="trends">
        <h1>TRENDS</h1>
        <div id="trends-cont">
          <div className="box-trend"><img src={adidas_Cons} alt="" /><h3>Adidas Consortium</h3></div>
          <div className="box-trend"><img src={nike_sombra} alt="" /><h3>Nike Sombra</h3></div>
          <div className="box-trend"><img src={adidas_blue} alt="" /><h3>Adidas Forum</h3></div>
          <div className="box-trend"><img src={nike_drift} alt="" /><h3>Nike Driftwood</h3></div>
        </div>
    </div>
  </div>
  )
}
