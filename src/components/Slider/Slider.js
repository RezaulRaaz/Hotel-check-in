import React, { useState } from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import data from "../Fakedata/data";
import { Link } from "react-router-dom";
const Slider = () => {
  // const [location, setLocation] = useState(data);
  return (
    <div>
      <OwlCarousel className="owl-theme"  items={4} autoplay loop nav>
        {data.map((location) => (
          <Link to={`/booking/${location.id}`}>
            <div
              className="slider slideractive"
              style={{ background: `url(${location.image})` }}
            >
              <div className="slider-title-overlay pl-3">
                <h3 className="text-white text-uppercase">{location.name}</h3>
              </div>
            </div>
          </Link>
        ))}
      </OwlCarousel>
    </div>
  );
};

export default Slider;
