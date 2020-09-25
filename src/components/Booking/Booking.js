import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import location from "../Fakedata/data";
const Booking = () => {
  const { id } = useParams();
  let singleLocation = location.find(loca=>loca.id == id)
  return (
    <div>
      <div class="container">
        <div class="hotelbooking text-left">
          <div class="row">
            <div class="col-lg-6">
              <div class="hotel-dsc">
                <h1
                  class="text-white text-uppercase"
                  style={{ fontSize: "50px", fontWeight: "bolder" }}
                >
                  {singleLocation.name}
                </h1>
                <p class="text-white">
                {singleLocation.description}
                </p>
              </div>
            </div>
            <div class="col-lg-6">
              <div class="booking-date text-left">
                <div class="card">
                  <div class="card-body">
                    <div class="form-group">
                      <label for="exampleInputEmail1">Origin</label>
                      <input
                        type="email"
                        class="form-control"
                        id="exampleInputEmail1"
                        value={singleLocation.origin}
                        aria-describedby="emailHelp"
                      />
                    </div>
                    <div class="form-group">
                      <label for="exampleInputEmail1">Destination</label>
                      <input
                        type="email"
                        class="form-control"
                        id="exampleInputEmail1"
                        value={singleLocation.name}
                        aria-describedby="emailHelp"
                      />
                    </div>
                    <div class="row">
                      <div class="col-lg-6">
                        <div class="form-group">
                          <label for="exampleInputEmail1">From</label>
                          <input
                            type="date"
                            class="form-control"
                            id="exampleInputEmail1"
                            
                            aria-describedby="emailHelp"
                          />
                        </div>
                      </div>
                      <div class="col-lg-6">
                        <div class="form-group">
                          <label for="exampleInputEmail1">To</label>
                          <input
                            type="date"
                            class="form-control"
                            id="exampleInputEmail1"
                        
                            aria-describedby="emailHelp"
                          />
                        </div>
                      </div>
                    </div>
                    <Link
                      to={'/hotels/'+singleLocation.id}
                      class="btn btn-warning btn-lg btn-block"
                    >
                      Start Booking
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Booking;
