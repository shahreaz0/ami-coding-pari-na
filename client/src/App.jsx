import React, { useState, useReducer } from "react";
import { Route, Switch } from "react-router-dom";

// components
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import LoginPage from "./components/LoginPage";
import RegisterPage from "./components/RegisterPage";

// route protection components
import ProtectedRoute from "./ProtectedRoute";
import ProtectedRouteIfNoUser from "./ProtectedRouteIfNoUser";

// contexts
import UserContext from "./contexts/UserContext";

// reducers
import { reducer, initialState } from "./reducers/UseReducer";

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="App">
      <UserContext.Provider value={{ state, dispatch }}>
        <Navbar />
        <Switch>
          <ProtectedRoute
            exact
            path="/"
            redirectRoute="/login"
            component={Home}
          />

          <ProtectedRouteIfNoUser
            exact
            path="/login"
            redirectRoute="/"
            component={LoginPage}
          />

          <ProtectedRouteIfNoUser
            exact
            path="/register"
            redirectRoute="/"
            component={RegisterPage}
          />
        </Switch>
      </UserContext.Provider>
    </div>
  );
};

export default App;
