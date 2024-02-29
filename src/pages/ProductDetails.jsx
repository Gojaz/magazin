import React from "react";
import { useParams } from "react-router-dom";
import useFetch from "../UseFetch";

const ProductDetails = () => {
  const { id } = useParams();
  const { data } = useFetch(`/products?populate=*&filters[id][$eq]=${id}`);
  if (!data) {
    return;
  }
  return (
    <div className="product-details">
      <div className="container">
        <div className="product-details__wrapper">
          <img
            src={`http://localhost:1337${data[0].attributes.image.data.attributes.url}`}
            alt=""
          />
          <div>
            <div className="product-details__title">
              <h2>{data[0].attributes.title}</h2>
              <p>{data[0].attributes.description}</p>
            </div>
            <div className="product-details__buy">
              <label className="checkbox style-c">
                <input className="checkbox-input" type="checkbox" />
                <div className="checkbox__checkmark"></div>
                <span className="checkbox__body">Сравнить</span>
              </label>
              <div>
                <span>{data[0].attributes.price}</span>
                <button className="btn product-item__buy">Купить</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;

//data.attributes.image.data.attributes.url
