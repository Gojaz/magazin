import React from "react";
import ComparisonTop from "../components/Comparison/ComparisonTop";
import Characteristic from "../components/Comparison/Characteristic";

import { useSelector } from "react-redux";

function Comparison() {
  const products = useSelector((state) => state.comparison.products);
  console.log(products);
  return (
    <section className="comparison">
      <div className="container">
        <h2 className="comparison-top__title">Сравнение товаров</h2>
        {products.map((products) =>(
          <ComparisonTop key={products.id} products={products} />
        ))}
        {/* <ComparisonTop /> */}
        <Characteristic />
      </div>
    </section>
  );
}

export default Comparison;
