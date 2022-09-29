import React from 'react'
import "./Style.scss"
import { socialImages } from '../../assets/Socials_Images/socialsImages'

const Socials = () => {
  return (
    <div className='socials_container'>
      <p>INSTAGRAM</p>
      <h2>#Espufi</h2>
      <div className='socials-images_container'>
        {socialImages?.map((imageSocial,index)=>(
          <img src={imageSocial.image} key={index} />
        ))}
      </div>
    </div>
  )
}

export default Socials