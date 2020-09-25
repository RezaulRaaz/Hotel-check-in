import React from "react";
import { useParams } from "react-router-dom";
import location from "../Fakedata/data";
const Hotels = () => {
  const { id } = useParams();
  let singleLocation = location.find((loca) => loca.id == id);
  const hotels = singleLocation.hotels;
  return (
    <div>
      <div className="container">
        <div className="row">
          <div class="col-lg-6">
            {hotels.map((hotel) => (
              <div class="card mb-3" style={{ maxWwidth: "540px" }}>
                <div class="row no-gutters">
                  <div class="col-md-5">
                    <img
                      src={hotel.image}
                      style={{ width: "100%", height: "220px" }}
                      class="card-img"
                    />
                  </div>
                  <div class="col-md-7">
                    <div class="card-body">
                      <p class="card-title">
                        <b>{hotel.name}</b>
                      </p>
                      <small class="text-muted">{hotel.spacipacation}</small>
                      <p class="card-text">{hotel.description}</p>
                      <small class="text-muted mt-2">
                        <span style={{ color: "yellow" }}>
                          <svg
                            width="1em"
                            height="1em"
                            viewBox="0 0 16 16"
                            class="bi bi-star-fill"
                            fill="currentColor"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                          </svg>
                          <span className="text-dark text-bold">{hotel.rate}(10)&nbsp;&nbsp;</span>
                        </span>

                        <span className="text-dark">
                          ${hotel.price+'/night'}&nbsp;&nbsp;${hotel.total+' total'}
                        </span>
                      </small>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hotels;
