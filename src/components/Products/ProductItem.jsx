import React from "react";

import { useDispatch, useSelector } from "react-redux";

import { Link } from "react-router-dom";
import { addItem } from "../../redux/slice/cartSlice";

import {
  removeProducts,
  setIsChecked,
  setProducts,
} from "../../redux/slice/comparisonSlice";

const ProductItem = ({ product }) => {
  const title = product.attributes.title;
  const description = product.attributes.description;
  const img = `http://localhost:1337${product.attributes.image.data.attributes.url}`;
  const price = product.attributes.price.replace(/(\d)(?=(\d{3})+$)/g, "$1 ");
  const id = product.id;

  const dispatch = useDispatch();
  const isCheckedId = useSelector((state) => state.comparison.isCheckedId);
  const cartItem = useSelector((state) => state.cart.item.find((obj) => obj.id === id));
  const checkedProducts = useSelector((state) => state.comparison.products);
  
  // const dispatch = useDispatch();

  const onClickAdd = () => {
    const item = {
      id,
      title,
      description,
      price: product.attributes.price,
      img,
    };
    dispatch(addItem(item));
  };

  const handleChange = (e, id) => {
    dispatch(setIsChecked(id));
    const item = {
      id,
      title,
      description,
      price: product.attributes.price,
      img,
    };
    const activeData = document.getElementById(id).checked;

    dispatch(activeData ? setProducts(item) : removeProducts(id));
  };

  return (
    <div className="product-item">
      <div className="product-item__wrapper">
        <img className="product-item__img" src={img} alt="" />
        <div className="product-item__center">
          <Link to={`/product/${id}`} className="product-item__text">
            {title} {description}
          </Link>
        </div>
        <div className="checkbox-input-container">
          <label className="checkbox style-c">
            <input 
              checked={checkedProducts.some(product => product.id == id )}
              id={id}
              onChange={(e) => handleChange(e, id)}
              className="checkbox-input"
              type="checkbox"
            />
            <div className="checkbox__checkmark"></div>
            <span className="checkbox__body">Сравнить</span>
          </label>
        </div>
        <Link to={`/product/${id}`} className="product-item__right">
          <p className="product-item__price">{price} ₽</p>
        </Link>
        {cartItem ? (
          <Link to={"/cart"}>
            <button className="btn product-item__cart">В корзине</button>
          </Link>
        ) : (
          <button onClick={onClickAdd} className="button product-item__buy">
            Купить
          </button>
        )}
      </div>
    </div>
  );
};

export default ProductItem;
