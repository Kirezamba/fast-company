import React from "react";

import { Redirect, Route, Switch } from "react-router-dom";
import Navigation from "./components/Navigation";
import LoginPage from "./layouts/LoginPage";
import MainPage from "./layouts/MainPage";
import UsersPage from "./layouts/UsersPage";

function App() {
  return (
    <>
      <Navigation />
      <Switch>
        <Route path="/users/:userId?" component={UsersPage} />
        <Route path="/login" component={LoginPage} />
        <Route path="/" component={MainPage} />
        <Redirect to="/" />
      </Switch>
    </>
  );
}

export default App;
