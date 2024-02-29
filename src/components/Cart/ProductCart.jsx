import React from "react";
import { useDispatch } from "react-redux";
import { addItem, minusItem, removeItem } from "../../redux/slice/cartSlice";
import clsx from "clsx";

function ProductCart({ item }) {
  const count = item.count;
  const id = item.id;
  const price = item.price.replace(/(\d)(?=(\d{3})+$)/g, "$1 ");
  const totalPriceItem = (item.price * item.count)
    .toString()
    .replace(/(\d)(?=(\d{3})+$)/g, "$1 ");

  const dispatch = useDispatch();

  const onClickPlus = () => {
    dispatch(
      addItem({
        id,
      })
    );
  };

  const onClickMinus = () => {
    dispatch(minusItem(id));
  };

  const onClickRemove = () => {
    dispatch(removeItem(id));
  };

  return (
    <div className="cart__item">
      <div className="cart__item-img">
        <div className="img">
          <img className="game_img" src={item.img} alt="product" />
        </div>
        <div>
          <h3 className="cart__item-title">{item.title}</h3>
          <p>{item.description}</p>
        </div>
      </div>
      <div className="cart__item-price">
        <b>{price} ₽</b>
      </div>
      <div className="cart__item-count">
        <button
          disabled={count <= 1}
          onClick={onClickMinus}
          className={clsx("button cart__item-count-minus", {
            "cart__item-minus-disabled": count === 1,
          })}
        >
          -
        </button>
        <b>{item.count}</b>
        <button onClick={onClickPlus} className="button cart__item-count-plus">
          +
        </button>
      </div>
      <div className="cart__item-total">
        <b>{totalPriceItem} ₽</b>
      </div>
      <div className="cart__item-remove">
        <button onClick={onClickRemove} className="button button--circle">
          +
        </button>
      </div>
    </div>
  );
}

export default ProductCart;
