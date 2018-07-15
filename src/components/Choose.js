import React, { Component } from "react";
import Header from "./Header";
import Color from "./Color";
import Footer from "./Footer";
import "../css/Choose.css";
import data from "../json/learn.json";

class Choose extends Component {
  render() {
    return (
      <div className="Choose">
        <Header />
        <Color type="dang" push={this.props.history.push} />
        <Color type="reps" push={this.props.history.push} />
        <Color type="read" push={this.props.history.push} />
        <Color type="watch" push={this.props.history.push} />
        <Color type="tutorial" push={this.props.history.push} />
        <Footer />
      </div>
    );
  }
}

export default Choose;
