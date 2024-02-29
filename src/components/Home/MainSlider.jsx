import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import promo1 from "../../assets/img/promo_img1.webp";

function MainSlider() {
  const slider = [0, 1, 2];
  return (
    <div className="main_slider">
      <Swiper
        modules={[Pagination]}
        loop={true}
        pagination={{ clickable: true }}
        className="mainSlider"
      >
        <>
          {slider.map((index) => {
            return (
              <SwiperSlide key={index}>
                <img className="main_slider__img" src={promo1} />
                <div className="main_slider__wrapper">
                  <h4 className="main_slider__title">
                    Специальное предложение{" "}
                  </h4>
                  <p className="main_slider__text">
                    скидка при первой покупке 20%
                  </p>
                  <a href="#">
                    <button className="btn main_slider__btn">
                      Купить сейчас
                    </button>
                  </a>
                </div>
              </SwiperSlide>
            );
          })}
        </>
      </Swiper>
    </div>
  );
}

export default MainSlider;



