import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../App";
import * as firebase from "firebase/app";
const Header = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  
  const handleSigout=() => {
    firebase.auth().signOut()
    .then(res =>{
        const signOutUser={
          name: '',
          email: '',
        }
        setLoggedInUser(signOutUser)
    })
  }
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-dark pt-4">
        <a class="navbar-brand" href="#">
          <h4 class="text-warning">HOTEL CHEK IN</h4>
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav m-auto text-center">
            <li class="nav-item active">
              <Link class="nav-link h5" to="/">
                Home <span class="sr-only">(current)</span>
              </Link>
            </li>

          </ul>
          <form class="form-inline my-2 my-lg-0">
            <a class="nav-link h5 text-white" href="#">
               {loggedInUser.name ? "Welcome " + loggedInUser.name : ""}
            </a>
            {loggedInUser.email?<a href="#" onClick={handleSigout} class="btn btn-warning my-2 my-sm-0">
              Logout
            </a>:<Link to="/login" class="btn btn-warning my-2 my-sm-0">
              Login
            </Link>}
          </form>
        </div>
      </nav>
      <div class="clear-fixed"></div>
    </div>
  );
};

export default Header;
