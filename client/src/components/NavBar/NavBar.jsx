import React from 'react'
import "./Style.scss"

const NavBar = () => {
  return (
    <div className='header'>
      <div className='header__container_logo'>
        <h2>Pufi</h2>
      </div>
      <div >
        <ul className='header__container_items'>
          <li>
            <h3>Pufi Puff</h3>
          </li>
          <li id='pufi-rain'>
            <h3 >Pufi Rain</h3>
          </li>
          <li id='pufi-cart'>
            <h3>Pufi Cart</h3>
          </li>
          <li>
            <h3>Pufi Nap</h3>
          </li>
        </ul>
      </div>
      <div className='header__container_user'>
        <h4 id='mi-cuenta'>MI CUENTA</h4>
        <h4>MI COMPRA</h4>
      </div>
    </div>
  )
}

export default NavBar