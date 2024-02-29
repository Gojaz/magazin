import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import arrow from "../../assets/img/arrow.svg";

function BottomCart() {
  const { totalPrice, item } = useSelector((state) => state.cart);
  const totalCount = item.reduce((sum, obj) => obj.count + sum, 0);
  return (
    <div className="cart__bottom">
      <div className="cart__bottom-details">
        <span>
          Всего игр:{" "}
          <b className="cart__bottom_color_white">{totalCount} шт.</b>
        </span>
        <span>
          Сумма игр:{" "}
          <b className="cart__bottom_color">
            {totalPrice.toString().replace(/(\d)(?=(\d{3})+$)/g, "$1 ")} ₽
          </b>
        </span>
      </div>
      <div className="cart__bottom-buttons">
        <Link to="/">
          <button className="button go-back-btn">
            <img src={arrow} alt="" />
            <span> Вернуться назад</span>
          </button>
        </Link>
        <button className="btn pay-btn">
          <span>Оплатить сейчас</span>
        </button>
      </div>
    </div>
  );
}

export default BottomCart;
