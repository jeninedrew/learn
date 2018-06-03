import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import App from "./App";
import Article from "./Article";
import NotFound from "./NotFound";

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={App} />
      {/*<Route path="/article/:storeId" component={Article} /> */}
      {/*<Route component={NotFound} /> */}
    </Switch>
  </BrowserRouter>
);

export default Router;
