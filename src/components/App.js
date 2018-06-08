import React, { Component } from "react";
import "../css/App.css";
import Header from "./Header";
import Panel from "./Panel";
import Footer from "./Footer";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Panel />
        <Footer />
      </div>
    );
  }
}

export default App;
