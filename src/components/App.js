import React, { Component, Fragment } from "react";
import "../css/App.css";
import Header from "./Header";
import Learn from "./Learn";
import Add from "./Add";
import Footer from "./Footer";
import data, { flashcards } from "./json/data.json";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header appTitle="This is title" />
        <Header appTitle="This is another title instance" />
        <Fragment className="learns">
          {/* Return children with no wrapper for Grid! React.Fragment renders out to nothing! */}
          <Learn />
        </Fragment>
        <Add />
        <Footer />
      </div>
    );
  }
}

export default App;
