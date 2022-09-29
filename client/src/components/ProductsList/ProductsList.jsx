import React from "react";
import { productsData } from "../../assets/Products-Data/productsData";
import Product from "../Product/Product";

const ProductsList = () => {
  return productsData?.map((product, index) => (
    <Product
      key={index}
      index={index}
      productImage={product.image}
      productName={product.name}
      logoImage={product.logoImage}
    />
  ));
};

export default ProductsList;
