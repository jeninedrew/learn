import React, { Component } from "react";

class Color extends Component {
  goToApp = e => {
    const learnID = "hi";
    console.log(this);
  };
  render() {
    return <button onClick={this.goToApp} />;
  }
}

export default Color;
