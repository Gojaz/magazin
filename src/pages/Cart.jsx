import React from "react";
import TopCart from "../components/Cart/TopCart";
import ProductCart from "../components/Cart/ProductCart";
import BottomCart from "../components/Cart/BottomCart";
import { useSelector } from "react-redux";
import CartEmpty from "../components/Cart/CartEmpty";

function Cart() {
  const { item, totalPrice } = useSelector((state) => state.cart);

  console.log(item)

  if (!totalPrice) {
    return <CartEmpty />;
  }
  return (
    <section className="cart">
      <div className="container">
        <TopCart />
        {item.map((item) => (
          <ProductCart key={item.id} item={item} />
        ))}
        <BottomCart />
      </div>
    </section>
  );
}

export default Cart;
