import React, { Component } from "react";
import Header from "./Header";
import Color from "./Color";
import Footer from "./Footer";
import "../css/Choose.css";

class Choose extends Component {
  render() {
    return (
      <div className="Choose">
        <Header />
        <Color push={this.props.history.push} />
        <Color />
        <Color />
        <Color />
        <Color />
        <Footer />
      </div>
    );
  }
}

export default Choose;
