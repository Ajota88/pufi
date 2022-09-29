import React from 'react'
import Form from "../Form/Form"
import "./Style.scss"

const Newsletter = () => {
  return (
    <div className='newsletter_container'>
      <p>NEWSLETTER</p>
      <h2>SUSCRIBETE</h2>
      <p id='p-novedades'>y enterate de todas las novedades</p>
      <Form />
    </div>
  )
}

export default Newsletter