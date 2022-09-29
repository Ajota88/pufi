import React from 'react'
import "./Style.scss"
import cartNav from "../../assets/Carousel_Images/cart-nav.png"
import rainNav from "../../assets/Carousel_Images/rain-nav.png"
import puffNav from "../../assets/Carousel_Images/puff-nav.png"
import napNav from "../../assets/Carousel_Images/nap-nav.png"   

const NavBar = () => {
  return (
    <div className='header'>
      <div className='header__container_logo'>
        <a href="#"><h2>Pufi</h2></a>
      </div>
      <div >
        <ul className='header__container_items'>
          <li>
          <img src={puffNav} />
            <h3>Pufi Puff</h3>
          </li>
          <li id='pufi-rain'>
          <img src={rainNav} />
            <h3 >Pufi Rain</h3>
          </li>
          <li id='pufi-cart'>
          <img src={cartNav} />
            <h3>Pufi Cart</h3>
          </li>
          <li>
          <img src={napNav} />
            <h3>Pufi Nap</h3>
          </li>
        </ul>
      </div>
      <div className='header__container_user'>
        <a href=""><h4 id='mi-cuenta'>MI CUENTA</h4></a>
        <a href=""><h4>MI COMPRA</h4></a>
      </div>
    </div>
  )
}

export default NavBar