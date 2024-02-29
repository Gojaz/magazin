import React from "react";
import { Link } from "react-router-dom";

import useFetch from "../../UseFetch";

import { useDispatch, useSelector } from "react-redux";
import { setActiveIndex } from "../../redux/slice/filterSlice";

import clsx from "clsx";

function Sidebar() {
  const activeIndex = useSelector((state) => state.filter.activeIndex);
  const dispatch = useDispatch();
  const { data } = useFetch("/types");

  const onClickCategory = (i) => {
    dispatch(setActiveIndex(i));
  };

  return (
    <div className="sidebar">
      <h1 className="sidebar__title">Каталог</h1>
      <div className="sidebar__wrapper">
        <ul className="sidebar__list">
          {data?.map((category) => {
            return (
              <li
                key={category.id}
                onClick={() => onClickCategory(category.id)}
                className={clsx("sidebar__item", {
                  active: category.id === activeIndex,
                })}
              >
                <Link
                  className="sidebar__link"
                  to={`/products/${category.id}`}
                >
                  {category.attributes.title}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
