import React from 'react'
import "./Style.scss"

const Product = ({productImage,productName,logoImage}) => {
  return (
    <div className='product_container'>
      <div className='product-img_container'>
        <img src={productImage}/>
      </div>
      <div className='product-description_container'>
        <div className='description-logo_container'>
          <img src={logoImage} />
          <h3>{productName}</h3>
        </div>
        <p>Descripción del producto. Este es un texto simulado</p>
        <h4>&gt; VER MÁS</h4>
      </div>
    </div>
  )
}

export default Product