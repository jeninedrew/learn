import React, { Component, Fragment } from "react";
import "../css/App.css";
import Header from "./Header";
import Learn from "./Learn";
import Add from "./Add";
import Footer from "./Footer";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Fragment>
          {/* Return children with no wrapper for Grid! React.Fragment renders out to nothing! */}
          <Learn title="Review" />
          <Learn title="Watch" />
          <Learn title="Read" />
        </Fragment>
        <Add />
        <Footer />
      </div>
    );
  }
}

export default App;

/*
// Variables
$red:          #db3841;
$dark-red:     #af1821;
$orange:       #f08131;
$dark-orange:  #db6510;
$yellow:       #fab73f;
$dark-yellow:  #efa218;
$green:        #6aba50;
$dark-green:   #45882f;
$blue:         #27a1d9;
$dark-blue:    #1b759f;
$purple:       #934196;
$dark-purple:  #702c74;
$grey:         #e0e0e0;
*/
