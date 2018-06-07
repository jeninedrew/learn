import React, { Component } from "react";
import "../css/App.css";
import Header from "./Header";
import Panel from "./Panel";
import Footer from "./Footer";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Yellow, I'm the App component!</h1>
        <Header />
        <Panel />
        <Footer />
      </div>
    );
  }
}

export default App;
