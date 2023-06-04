import React from 'react'
import "../assets/css/Home.css"
import banner from "../assets/statics/banner-newArrival.png"
import banner_sale from "../assets/statics/banner-oferta.png"
import next from "../assets/statics/next_black.png"
import next_w from "../assets/statics/next_white.png"
import { useState } from 'react'

export default function Home() {
  const [mostrarBanner, setMostrarBanner] = useState(true);

  const nextBanner = () => {
    setMostrarBanner(false);
  };

  const backBanner = () => {
    setMostrarBanner(true);
  };
  return (
    <div>
      {mostrarBanner ? (
        <div>
          <img id="banner" src={banner} alt="" />
          <button id='next-banner' onClick={nextBanner}><img src={next} alt="" /></button>
          <button id='back-banner' onClick={backBanner}>ATRAS</button>
        </div>
      ) : (
        <div>
          <img id="banner-sale" src={banner_sale} alt="" />
          <button id='next-banner' onClick={nextBanner}><img src={next_w} alt="" /></button>
          <button id='back-banner' onClick={backBanner}>ATRAS</button>
        </div>
      )}
  </div>
  )
}
