import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import App from "./App";
import Hello from "./Hello";
import MyDogs from "./MyDogs";
import Learning from "./Learning";
import NotFound from "./NotFound";

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={App} />
      <Route exact path="/learning" component={App} />
      <Route exact path="/hello" component={Hello} />
      <Route exact path="/my-dogs" component={MyDogs} />
      <Route exact path="/learning" component={App} />
      <Route path="/learning/:learnId" component={Learning} />
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
);

export default Router;
