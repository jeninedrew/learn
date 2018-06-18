import React from "react";
// Pull in the React Dom because this is a web app!
import ReactDOM from "react-dom";
import "./index.css";
import Router from "./components/Router";
import registerServiceWorker from "./registerServiceWorker";

ReactDOM.render(<Router />, document.getElementById("root"));
registerServiceWorker();
