import React from "react";
import Sidebar from "./Sidebar";
import MainSlider from "./MainSlider";
import Banners from "./Banners";

function MainTop() {
  return (
    <div className="main_top">
      <div className="container">
        <div className="main_top__content">
          <div className="main_top__top">
            <div className="main_top__sidebar">
              <Sidebar />
            </div>
            <div className="main_top__main-slider">
              <MainSlider />
            </div>
            <div className="main_top__banners">
              <Banners />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainTop;
