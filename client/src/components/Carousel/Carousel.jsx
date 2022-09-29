import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import cart from "../../assets/Carousel_Images/carousel_cart.jpg";
import puff from "../../assets/Carousel_Images/carousel_puff.webp";
import rain from "../../assets/Carousel_Images/carousel_rain.webp";
import "./Style.scss";

export default function Carrusel() {
  return (
    <Carousel
      showArrows={false}
      infiniteLoop
      dynamicHeight
      animationHandler={"fade"}
      autoPlay
      useKeyboardArrows
      showThumbs={false}
      showStatus={false}
    >
      <div className="container">
        <img src={cart} alt="imag3" />
        <div className="text-container ">
          <h2>LLEVA LO QUE COMPRES DE MANERA FÁCIL</h2>
        </div>
      </div>
      <div className="container">
        <img src={puff} alt="imag2" />
        <div className="text-container ">
          <h2>ESTÁR CÓMODO NUNCA FUE TAN FÁCIL</h2>
        </div>
      </div>
      <div className="container">
        <img src={rain} alt="imag1" />
        <div className="text-container ">
          <h2>PROTÉGETE DE LA LLUVIA CON ESTILO</h2>
        </div>
      </div>
    </Carousel>
  );
}
