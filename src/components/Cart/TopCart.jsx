import React from "react";

import trash from "../../assets/img/trash.svg";
import { useDispatch } from "react-redux";
import { cleatItem } from "../../redux/slice/cartSlice";

function TopCart() {
  const dispatch = useDispatch();

  return (
    <div className="cart__top">
      <div className="cart__wrapper">
        <h2 className="cart__title">Корзина</h2>
        <div className="cart_clear">
          <img onClick={() => dispatch(cleatItem())} src={trash} alt="" />
        </div>
      </div>
    </div>
  );
}

export default TopCart;
