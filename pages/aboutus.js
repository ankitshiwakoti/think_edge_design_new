import React from "react";
import Slider from "react-slick";

const aboutus = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    beforeChange: (current, next) => {
      const slickList = document.querySelector(".slick-list");
      slickList.style.transform = "translateY(0)";
    },
    afterChange: (current) => {
      const slickList = document.querySelector(".slick-list");
      slickList.style.transform = "translateY(-100%)";
    },
  };
  return (
    <div className="mt-5 " style={{ height: "50vh" }}>
      <h2> Single Item</h2>
      <Slider {...settings}>
        <div className="slide bg-primary">
          <h3>1</h3>
        </div>
        <div
          className="slide "
          style={{ backgroundColor: "red", height: "50vh" }}
        >
          <h3>2</h3>
        </div>
        <div className="slide">
          <h3>3</h3>
        </div>
        <div className="slide">
          <h3>4</h3>
        </div>
        <div className="slide">
          <h3>5</h3>
        </div>
        <div>
          <h3>6</h3>
        </div>
      </Slider>
    </div>
  );
};

export default aboutus;
