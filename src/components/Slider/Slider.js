import React, { useState } from "react";
import data from "../Fakedata/data";
import { Link } from "react-router-dom";
const Slider = () => {
  // const [location, setLocation] = useState(data);
  return (
    <div className="d-flex">
        {data.map((location) => (
          <Link to={'/booking/'+location.id}>
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
    </div>
  );
};

export default Slider;
