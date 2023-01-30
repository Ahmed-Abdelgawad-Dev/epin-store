import React, { useContext, useEffect, useState } from "react";
import Slider from "react-slick";
import { Context } from "../ContextApi";
import Card from "./Card";

const CategorySlider = ({ data, title = "top new arrival" }) => {
  const {
    screen: { width, height },
  } = useContext(Context);

  return (
    <div className="container pb-16 mt-8 ">
      <h2 className="text-2xl font-medium text-gray-800 uppercase mb-6">
        {title}
      </h2>
      {width <= 500 ? (
        <div className="flex flex-wrap">
          {data.map((item) => {
            return (
              <div className="p-2 w-1/2 m-0">
                <Card product={item} titleHight="6rem" />
              </div>
            );
          })}
        </div>
      ) : (
        <Slider
          dots
          autoplay
          slidesToShow={6}
          slidesToScroll={4}
          autoplaySpeed={2000}
        >
          {data.map((item) => {
            return (
              <div className="p-2 ">
                <Card product={item} titleHight="6rem" />
              </div>
            );
          })}
        </Slider>
      )}
    </div>
  );
};
export default CategorySlider;
