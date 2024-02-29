import React from "react";
import { Link } from "react-router-dom";

import empty_cart from "../../assets/img/empty-cart.png";

const CartEmpty = () => {
  return (
    <div className="container--cart">
      <div className="cart cart--empty">
        <h2>Корзина пустая 😕</h2>
        <p>
          Вероятней всего, вы ни чего не добавили в корзину.
          <br />
          Для того, чтобы добавить в корзину перейидине в раздел товаров
        </p>
        <img src={empty_cart} alt="Empty cart" />
        <Link to="/">
          <button className="btn button-black">Вернуться назад</button>
        </Link>
      </div>
    </div>
  );
};

export default CartEmpty;
