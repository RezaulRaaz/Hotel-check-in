import React, { useContext, useState } from "react";
import Googleimg from "../../assets/Icon/google.png";
import Fbimg from "../../assets/Icon/fb.png";
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "./firebase-config";
import { UserContext } from "../../App";
import { Link, useHistory, useLocation } from "react-router-dom";

const Login = () => {

  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    error: "",
    success: false,
  });

  const history = useHistory();
  const location = useLocation();
  let { from } = location.state || { from: { pathname: "/" } };

  if (firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig);
  }
  var FbProvider = new firebase.auth.FacebookAuthProvider();
  var GoogleProvider = new firebase.auth.GoogleAuthProvider();
  const signInWithGoogle = () => {
    firebase
      .auth()
      .signInWithPopup(GoogleProvider)
      .then(function (result) {
        const { displayName, email } = result.user;
        const signedInUser = { name: displayName, email };
        setLoggedInUser(signedInUser);
        history.replace(from);
        // ...
      })
      .catch(function (error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
      });
  };
  const signInWithFacebook = () => {
    firebase
      .auth()
      .signInWithPopup(FbProvider)
      .then(function (result) {
        const { displayName, email } = result.user;
        const signedInUser = { name: displayName, email };
        setLoggedInUser(signedInUser);
        history.replace(from);
      })
      .catch(function (error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
      });
  };

  const handleBlur = (e) => {
    let isFormValid;
    if (e.target.name === "email") {
      isFormValid = /\S+@\S+/.test(e.target.value);
    }
    if (e.target.name === "password") {
      isFormValid = e.target.value.length > 6;
    }
    if (isFormValid) {
      const newUserInfo = { ...user };
      newUserInfo[e.target.name] = e.target.value;
      setUser(newUserInfo);
    }
  };

  const handleSubmit=(e) => {
   e.preventDefault();
   if (user.email && user.password) {
    firebase.auth().signInWithEmailAndPassword(user.email, user.password)
    .then(res =>{
      const { displayName, email } = res.user;
        const signedInUser = { name: displayName, email };
        setLoggedInUser(signedInUser);
        history.replace(from);
    })
    .catch( error => {
      var errorCode = error.code;
      var errorMessage = error.message;
      // ...
    });
   }
  }
  return (
    <div>
      <div class="container">
        <div class="hotelbooking ">
          <div class="col-lg-6">
            <div class="booking-date">
              <div class="card">
                <div class="card-body text-left">
                  <form  onSubmit={handleSubmit}>
                  <h5 class="card-title">
                    <strong>Login</strong>
                  </h5>
                  <div class="form-group">
                    <label for="exampleInputEmail1">Email</label>
                    <input
                      type="email"
                      onBlur={handleBlur}
                      name="email"
                      class="form-control"
                      id="exampleInputEmail1"
                      placeholder="Username or Email"
                      aria-describedby="emailHelp"
                      required
                      name="email"
                    />
                  </div>
                  <div class="form-group">
                    <label for="exampleInputEmail1">Passowrd</label>
                    <input
                      type="password"
                      onBlur={handleBlur}
                      name="password"
                      class="form-control"
                      id="exampleInputEmail1"
                      placeholder="Passowrd"
                      aria-describedby="emailHelp"
                      required
                      name="password"
                    />
                  </div>
                  <div class="row">
                    <div class="col-lg-6">
                      <div class="form-group form-check">
                        <input
                          type="checkbox"
                          class="form-check-input"
                          id="exampleCheck1"
                        />
                        <label class="form-check-label" for="exampleCheck1">
                          Remember Me
                        </label>
                      </div>
                    </div>
                    <div class="col-lg-6 text-right">
                      <a href="#" class="text-warning">
                        Forgot Password
                      </a>
                    </div>
                  </div>
                  <input
                    type="submit"
                    class="btn btn-warning btn-lg btn-block"
                    value="Login"
                  />
                  </form>
                  <p class="text-center pt-3">
                    <span>Don't have an account ?</span>{" "}
                    <Link to="/register" class="text-warning">
                      Create an account
                    </Link>
                  </p>

                  <div class="social-login px-5">
                    <div class="row">
                      <div
                        class="social-button mb-2"
                        onClick={signInWithFacebook}
                      >
                        <div class="social-icon">
                          <img
                            src={Fbimg}
                            style={{
                              width: "37px",
                              height: "37px",
                              marginRight: "12px",
                            }}
                          />
                          <span class="text-center">
                            Continue with Facebook
                          </span>
                        </div>
                      </div>
                      <div class="social-button" onClick={signInWithGoogle}>
                        <div class="social-icon">
                          <img
                            src={Googleimg}
                            style={{
                              width: "37px",
                              height: "37px",
                              marginRight: "12px",
                            }}
                            alt=""
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
    </div>
  );
};

export default Login;
