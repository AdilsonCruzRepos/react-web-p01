import React from "react";
import { GlobalStyle } from "config/styles";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "Pages/Login";

export default function Routes() {
  return (
    <>
      <GlobalStyle />
      <Router>
        <Switch>
          <Route path="/" component={Login} />
        </Switch>
      </Router>
    </>
  );
}
