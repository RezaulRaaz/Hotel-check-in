import React from "react";
import Slider from "../Slider/Slider";
const Home = () => {
  return (
    <div>
      <div className="slider-area">
        <div className="hotel-details">
          <h1
            className="text-white text-uppercase home-hotel-details"
          >
            Cox's Bazar
          </h1>
          <p className="text-white">
            Cox's Bazar is a city, fishing port, tourism centre and district
            headquarters in southeastern Bangladesh. It is famous mostly for its
            long natural sandy beach, and it ...
          </p>
          <button className="btn btn-warning btn-lg">
            Booking
            <svg
              width="1em"
              height="1em"
              viewBox="0 0 16 16"
              className="bi bi-arrow-right"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
              />
            </svg>
          </button>
        </div>
        <div className="hotels">
          <Slider></Slider>
        </div>
      </div>
    </div>
  );
};

export default Home;
