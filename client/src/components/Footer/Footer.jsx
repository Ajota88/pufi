import React from 'react'
import "./Style.scss"

export const Footer = () => {
  return (
    <div className='footer_container'>
      <h2>Pufi</h2>
      <div className='products-footer'>
        <a>PUFFI RAIN</a>
        <a>PUFFI PUFF</a>
        <a>PUFFI CART</a>
        <a>PUFFI NAP</a>
      </div>
      <div className='info-footer'>
        <a>CONTACTO</a>
        <a>AYUDA</a>
        <a>CÓMO COMPRAR</a>
        <a>TÉRMINOS & CONDICIONES</a>
      </div>
      <div className='shopping-info'>
        COMPRA 100% SEGURA
      </div>
      <div className='socials-footer'>
        SEGUINOS EN
      </div>
    </div>
  )
}
