import React, { useState } from "react";
import Googleimg from "../../assets/Icon/google.png";
import Fbimg from "../../assets/Icon/fb.png";
import * as firebase from "firebase/app";
import firebaseConfig from "../Login/firebase-config";
import "firebase/auth";
import { Link } from "react-router-dom";
const Register = () => {
    if (firebase.apps.length === 0) {
        firebase.initializeApp(firebaseConfig);
      }
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    error: "",
    success: false,
  });
  const handleBlur = (e) => {
    let isFormValid;
    if (e.target.name === "email") {
      isFormValid = /\S+@\S+/.test(e.target.value);
    }
    if (e.target.name === "password") {
      isFormValid = e.target.value.length > 6;
    }
    if (e.target.name === "name") {
      isFormValid = true;
    }
    if (isFormValid) {
      const newUserInfo = { ...user };
      newUserInfo[e.target.name] = e.target.value;
      setUser(newUserInfo);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (user.email && user.password) {
        firebase.auth().createUserWithEmailAndPassword(user.email,user.password)
        .then(res => {
            const newUserInfo = { ...user };
            newUserInfo.success= true;
            newUserInfo.error= ''
            setUser(newUserInfo);
            updateUserName(user.name)
        })
        .catch(error => {
            const newUserInfo = { ...user };
            newUserInfo.error= error.message
            newUserInfo.success= false;
            setUser(newUserInfo);
        });
    }
  };
  const updateUserName =name=>{
    const user = firebase.auth().currentUser;

    user.updateProfile({
      displayName: name,
    }).then(function() {
     console.log('user name updated successfully')
    }).catch(function(error) {
      console.log(error)
    });
  }
  return (
    <div>
      <div class="hotelbooking ">
        <div class="col-lg-6">
          <div class="booking-date">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">
                  <strong>Create an account</strong>
                    <p style={{color:'red'}}>{user.error}</p>
                   {user.success && <p style={{color:'green'}}>User Created Successfully</p>}
                </h5>
                <form onSubmit={handleSubmit}>
                  <div class="form-group">
                    <label for="exampleInputEmail1">Full Name</label>
                    <input
                      onBlur={handleBlur}
                      name="name"
                      type="text"
                      class="form-control"
                      id="exampleInputEmail1"
                      placeholder="Full Name"
                      aria-describedby="emailHelp"
                    />
                  </div>
                  <div class="form-group">
                    <label for="exampleInputEmail1">Email</label>
                    <input
                      type="email"
                      class="form-control"
                      id="exampleInputEmail1"
                      placeholder="Email"
                      aria-describedby="emailHelp"
                      name="email"
                      required
                      onBlur={handleBlur}
                    />
                  </div>
                  <div class="form-group">
                    <label for="exampleInputEmail1">Passowrd</label>
                    <input
                      type="password"
                      name="password"
                      class="form-control"
                      id="exampleInputEmail1"
                      placeholder="Passowrd"
                      aria-describedby="emailHelp"
                      required
                      onBlur={handleBlur}
                    />
                  </div>
                  <input
                    type="submit"
                    class="btn btn-warning btn-lg btn-block"
                    value="Create an account"
                  />
                  <p class="text-center pt-3">
                    <span>Already have an account ?</span>{" "}
                    <Link to="/login" class="text-warning">
                      login
                    </Link>
                  </p>
                </form>

                <div class="social-login px-5">
                  <div class="row">
                    <div class="social-button mb-2">
                      <div class="social-icon">
                        <img
                          src={Fbimg}
                          style={{
                            width: "37px",
                            height: "37px",
                            marginRight: "12px",
                          }}
                          alt="dsfas"
                          srcset=""
                        />
                        <span class="text-center">Continue with Facebook</span>
                      </div>
                    </div>
                    <div class="social-button">
                      <div class="social-icon">
                        <img
                          src={Googleimg}
                          style={{
                            width: "37px",
                            height: "37px",
                            marginRight: "12px",
                          }}
                          alt="dsfas"
                          srcset=""
                        />
                        <span class="text-center">Continue with Google</span>
                      </div>
                    </div>
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

export default Register;
