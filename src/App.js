import React, { createContext, useState } from "react";
import "./App.css";
import "./assets/css/style.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Background from "./assets/Image/Rectangle1.png";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import Booking from "./components/Booking/Booking";
import Hotels from "./components/Hotels/Hotels";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import Register from "./components/Register/Register";

export  const UserContext = createContext();

function App() {
 const [loggedInUser,setLoggedInUser] = useState({});
  return (
    <div class="homepage" style={{ background: `url(${Background})` }}>
      <div class="background-overlay">
        <div class="container-fluid">
          <UserContext.Provider value={[loggedInUser,setLoggedInUser]}>
            <Router>
              <Header />
              <Switch>
                <Route path="/home">
                  <Home />
                </Route>
                <Route path="/login">
                  <Login />
                </Route>
                <Route path="/register">
                  <Register/>
                </Route>     
                <PrivateRoute path="/hotels/:id">
                  <Hotels/>
                </PrivateRoute>
                <Route path="/booking/:id">
                  <Booking />
                </Route>
                <Route exact path="/">
                  <Home />
                </Route>
              </Switch>
            </Router>
          </UserContext.Provider>
        </div>
      </div>
    </div>
  );
}

export default App;
