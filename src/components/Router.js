import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Choose from "./Choose";
import Hello from "./Hello";
import MyDogs from "./MyDogs";
import Learning from "./Learning";
import NotFound from "./NotFound";

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Choose} />
      <Route exact path="/hello" component={Hello} />
      <Route exact path="/my-dogs" component={MyDogs} />
      <Route path="/:type" component={Choose} />
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
);

export default Router;
