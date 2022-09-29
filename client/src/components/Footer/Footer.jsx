import React from 'react'
import "./Style.scss"

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
      </div>
      <div className='socials-footer'>
        <p>SEGUINOS EN</p>
      </div>
    </div>
  )
}
