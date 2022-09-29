import React from 'react'
import ShoppingButton from '../ShoppingButton/ShoppingButton'
import "./Style.scss"

const Product = ({productImage,productName,logoImage,index}) => {
  return (
    <div className={index % 2 ===0 ?'product_container':'product_container-reverse'}>
      <div className='product-img_container'>
        <img src={productImage}/>
        <ShoppingButton />
      </div>
      <div className='product-description_container' id={index}>
        <div className='description-logo_container'>
          <img src={logoImage} />
          <h3>{productName}</h3>
        </div>
        <div className='horizontal-line'></div>
        <p>Descripción del producto. Este es un texto simulado</p>
        <button>&gt; VER MÁS</button>
      </div>
    </div>
  )
}

export default Product