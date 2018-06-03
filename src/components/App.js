import React, { Component } from "react";
import "../css/App.css";
import Header from "./Header";
import Menu from "./Menu";
import Footer from "./Footer";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Menu />
				<Footer />
      </div>
    );
  }
}

export default App;
