import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import "./Style.scss";
import imageFooter1 from "../../assets/Carousel_Images/footer-image1.png";
import imageFooter2 from "../../assets/Carousel_Images/footer-image2.png";
import brandLive from "../../assets/Carousel_Images/brandlive-footer.png"

export const Footer = () => {
  return (
    <div>
      <div className="footer_container">
        <a href=""><h2>Pufi</h2></a>
        <div className="products-footer">
          <a href="#0">PUFI RAIN</a>
          <a href="#1">PUFI PUFF</a>
          <a href="#2">PUFI CART</a>
          <a href="#3">PUFI NAP</a>
        </div>
        <div className="info-footer">
          <a href="#">CONTACTO</a>
          <a href="#">AYUDA</a>
          <a href="#">CÓMO COMPRAR</a>
          <a href="#">TÉRMINOS & CONDICIONES</a>
        </div>
        <div className="shopping-info">
          <p>COMPRA 100% SEGURA</p>
          <div className="garantia-footer">
            <img src={imageFooter1} />
            <img src={imageFooter2} />
            <p>COMPRA CON LA GARANTIA DE PUFI</p>
          </div>
        </div>
        <div className="socials-footer">
          <p>SEGUINOS EN</p>
          <div>
            <a href="#">
              <FontAwesomeIcon icon={faFacebook} />
            </a>
            <a href="#">
              <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a href="#">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
          </div>
        </div>
      </div>
      <div className="vl-footer"></div>
      <div className="copyright-container">
        <div className="copyright-text">
        <p>PUFI Copyright 2017</p>
        <h5>Todos los derechos reservados</h5>
        </div>
        <img src={brandLive} />
      </div>
    </div>
  );
};
