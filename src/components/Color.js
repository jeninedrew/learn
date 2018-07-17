import React, { Component } from "react";
import Add from "./Add";
import { makeSlug } from "../js/helper";

class Color extends Component {
  goToLearn = e => {
    const type = makeSlug(this.props.type);
    this.props.push(`/${type}`);
  };

  render() {
    return (
      <div className="Color" onClick={this.goToLearn}>
        <Add addLearn={this.props.addLearn} />
      </div>
    );
  }
}

export default Color;
