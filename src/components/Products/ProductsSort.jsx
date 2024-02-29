import React from "react";

import arrow from "../../assets/img/arrow-down.svg";

import { useDispatch, useSelector } from "react-redux";

import { setOpen, setSort } from "../../redux/slice/filterSlice";

const list = [
  { name: "cначала популярные", sortProperty: "id:asc" },
  { name: "сначала недорогие", sortProperty: "price:asc" },
  { name: "cначала дорогие", sortProperty: "price:desc" },
];

const ProductsSort = () => {
  const {open, sort} = useSelector((state) => state.filter);
  const dispatch = useDispatch();

  const onClickListItem = (obj) => {
    dispatch(setSort(obj));
    dispatch(setOpen(false));
  };

  return (
    <div className="products-sort">
      <div className="products-sort__label">
        <span>Сортировка: </span>
        <span
          className="products-sort__tableau"
          onClick={() => {
            dispatch(setOpen(!open));
          }}
        >
          {sort.name} <img src={arrow} alt="arrow" />
        </span>
      </div>
      <div className="products-sort__popup">
        {open && (
          <ul>
            {list.map((obj) => (
              <li
                key={obj.name}
                onClick={() => onClickListItem(obj)}
                className={obj.name == sort.name ? "active" : ""}
              >
                {obj.name}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default ProductsSort;

//http://localhost:1337/api/products?sort[0]=price
