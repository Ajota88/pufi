import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons'
import "./Style.scss"
import imageFooter1 from "../../assets/Carousel_Images/footer-image1.png"
import imageFooter2 from "../../assets/Carousel_Images/footer-image2.png"


export const Footer = () => {
  return (
    <div className='footer_container'>
      <h2>Pufi</h2>
      <div className='products-footer'>
        <a href='#'>PUFFI RAIN</a>
        <a href='#'>PUFFI PUFF</a>
        <a href='#'>PUFFI CART</a>
        <a href='#'>PUFFI NAP</a>
      </div>
      <div className='info-footer'>
        <a href='#'>CONTACTO</a>
        <a href='#'>AYUDA</a>
        <a href='#'>CÓMO COMPRAR</a>
        <a href='#'>TÉRMINOS & CONDICIONES</a>
      </div>
      <div className='shopping-info'>
        <p>COMPRA 100% SEGURA</p>
        <div className='garantia-footer'>
          <img src={imageFooter1} />
          <img src={imageFooter2} />
          <p>COMPRA CON LA GARANTIA DE PUFI</p>
        </div>
      </div>
      <div className='socials-footer'>
        <p>SEGUINOS EN</p>
        <div>
        <a href="#"><FontAwesomeIcon icon={faFacebook} /></a>
        <a href="#"><FontAwesomeIcon icon={faTwitter} /></a>
        <a href="#"><FontAwesomeIcon icon={faInstagram} /></a>
        </div>
        
      </div>
    </div>
  )
}
