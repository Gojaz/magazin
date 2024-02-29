import React from "react";

import logo from "../../assets/img/logo.jpg";
import cart from "../../assets/img/cart.svg";
import comparison from "../../assets/img/comparison.svg";
import enter from "../../assets/img/enter.svg";

import { Link } from "react-router-dom";

import SearchForm from "./SearchForm";
import { useSelector } from "react-redux";

function Header() {

  const totalCount = useSelector((state) => state.cart.totalCount);



  return (
    <header className="header">
      <div className="container">
        <div className="header__inner">
          <Link className="header__logo" to="/">
            <img className="header__img" src={logo} alt="logo" />
          </Link>
          <SearchForm />
          <nav className="header__menu">
            <ul className="header__list">
              <li className="header__item">
                <Link className="header__link" to="/comparison">
                  <span>
                    <img className="header__svg" src={comparison} alt="cart" />
                  </span>
                  <span className="header__text">Сравнение</span>
                </Link>
              </li>
              <li className="header__item">
                <Link className="header__link" to="/cart">
                  <span>
                    <img className="header__svg" src={cart} alt="comparison" />
                  </span>
                  <div className="header__cart">
                    {totalCount > 0 && (
                      <span className="header__count-cart">{totalCount}</span>
                    )}
                    <span>Корзина</span>
                  </div>
                </Link>
              </li>
              <li className="header__item">
                <a className="header__link" href="#">
                  <span>
                    <img className="header__svg" src={enter} alt="enter" />
                  </span>
                  <span>Воити</span>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
