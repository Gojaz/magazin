import React from "react";

import { RxCross2 } from "react-icons/rx";

import product from "../../assets/img/promo_img1.webp";


const ComparisonTop = ({products}) => {
  console.log(products)
  return (
    <div className="comparison-top">
      <div className="comparison-top__wrapper">
        <div className="comparison-top__category">
          <div className="comparison-top__item">
            <span>Смартфоны 2</span>
            <RxCross2 />
          </div>
          <div className="comparison-top__item">
            <span>Смартфоны 2</span>
            <RxCross2 />
          </div>
        </div>
        <div className="comparison-top__products">
          <div className="comparison-top__product">
            <div className="comparison-top__center">
              <img className="comparison-top__img" src={product} alt="" />
            </div>
            <h2>Ноутбук DEXP Aquilon серый</h2>
            <div className="comparison-top__buy">
              <span>17 999</span>
              <button className="btn">Купить</button>
            </div>
          </div>
          <div className="comparison-top__product">
            <div className="comparison-top__center">
              <img className="comparison-top__img" src={product} alt="" />
            </div>
            <h2>Ноутбук DEXP Aquilon серый</h2>
            <div className="comparison-top__buy">
              <span>17 999</span>
              <button className="btn">Купить</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComparisonTop;
