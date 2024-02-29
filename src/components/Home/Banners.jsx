import React from "react";

import promo2 from "../../assets/img/promo_img2.jpg";
import promo3 from "../../assets/img/promo_img3.jpg";

function Banners() {
  return (
    <div className="banners">
      <div className="banners__wrapper">
        <img className="banners__img" src={promo2} alt="" />
        <div className="banners__container">
          <p className="banners__title">сэкономь до 10% на планшетах</p>
          <span className="banners__text">Купить сейчас</span>
        </div>
      </div>
      <div className="banners__wrapper">
        <img className="banners__img" src={promo3} alt="" />
        <div className="banners__container">
          <p className="banners__title">сэкономь до 10% на телевизорах</p>
          <span className="banners__text">Купить сейчас</span>
        </div>
      </div>
    </div>
  );
}

export default Banners;
