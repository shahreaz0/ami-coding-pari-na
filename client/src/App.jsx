import React, { useState, useReducer } from "react";
import { Route, Switch } from "react-router-dom";

// components
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import LoginPage from "./components/LoginPage";
import RegisterPage from "./components/RegisterPage";

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
          <Route exact path="/" component={Home} />

          <Route exact path="/login" component={LoginPage} />
          <Route exact path="/register" component={RegisterPage} />
        </Switch>
      </UserContext.Provider>
    </div>
  );
};

export default App;
