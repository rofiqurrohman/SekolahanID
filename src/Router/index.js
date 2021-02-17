import React from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import { RecoilRoot } from "recoil";

import Home from "../Views/Home";
import Search from "../Views/Search";
import About from "../Views/About";
import NavTop from "../Component/NavTop";
import NavBottom from "../Component/NavBottom";

const Router = () => {
  return (
    <BrowserRouter>
      <RecoilRoot>
        <NavTop />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/search" component={Search} />
          <Route path="/about" component={About} />
        </Switch>
        <NavBottom />
      </RecoilRoot>
    </BrowserRouter>
  );
};

export default Router;
