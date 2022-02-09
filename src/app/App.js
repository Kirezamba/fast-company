import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import Navigation from "./components/ui/Navigation";
import Login from "./layouts/Login";
import Main from "./layouts/Main";
import Users from "./layouts/Users";

function App() {
  return (
    <>
      <Navigation />
      <Switch>
        <Route path="/users/:userId?/:edit?" component={Users} />
        <Route path="/login/:type?" component={Login} />
        <Route path="/" component={Main} />
        <Redirect to="/" />
      </Switch>
    </>
  );
}

export default App;
