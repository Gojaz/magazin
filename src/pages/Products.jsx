import React from "react";

import Sidebar from "../components/Home/Sidebar";
import ProductItem from "../components/Products/ProductItem";
import ProductsSort from "../components/Products/ProductsSort";

import useFetch from "../UseFetch";

import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setIsChecked } from "../redux/slice/comparisonSlice";

const Products = () => {
  
  const { id } = useParams();
  const sort = useSelector((state) => state.filter.sort);

  const { data } = useFetch(
    `/products?populate=*&filters[types][id][$eq]=${id}&sort=${sort.sortProperty}`
  );

  return (
    <section className="products">
      <div className="container">
        <div className="products__wrapper">
          <div className="products__sidebar main_top__sidebar">
            <Sidebar />
          </div>
          <div className="products__container">
            <ProductsSort />
            <div className="products__item">
              {data && <p>Найдено {data.length} товаров</p>}
              {data?.map((product) => {
                return <ProductItem key={product.id} product={product} />;
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;

//`/products?sort=price:desc&populate=*&filters[types][id][$eq]=${id}`
// &sort=${sort.sortProperty}
