import React from "react";

import useFetch from "./../UseFetch";

import { useLocation } from "react-router-dom";

import ProductItem from "../components/Products/ProductItem";

const Search = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const searchTerm = searchParams.get("query");
  const { data } = useFetch(
    `/products?populate=*&filters[title][$contains]=${searchTerm}`
  );
  console.log(data);

  return (
    <div>
      <div className="container">
        {data && <h1>Наидено {data.length} товаров</h1>}
        <div className="products__item">
          {data?.map((product) => (
            <ProductItem key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Search;
