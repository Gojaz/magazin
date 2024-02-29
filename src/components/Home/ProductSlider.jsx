import React from "react";

import useFetch from "../../UseFetch";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Link } from "react-router-dom";

function Slider() {
  const { data } = useFetch("/products?populate=*&filters[isNew]=true");
  return (
    <div className="slider">
      <Swiper
        modules={[Pagination, Navigation]}
        loop={false}
        navigation={true}
        pagination={{ clickable: true }}
        spaceBetween={30}
        slidesPerView={5}
        className="productSlider slider__wrapper"
      >
        <>
          <h2>Новые товары</h2>
          {data?.map((product) => {
            return (
              <SwiperSlide key={product.id}>
                <div>
                  <Link to={`/product/${product.id}`} className="slider__container">
                    <img
                      className="slider__img"
                      src={`http://localhost:1337${product.attributes.image.data.attributes.url}`}
                      alt=""
                    />
                    <span className="slider__text">new</span>
                  </Link >
                </div>
              </SwiperSlide>
            );
          })}
        </>
      </Swiper>
    </div>
  );
}

export default Slider;


