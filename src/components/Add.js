import React, { Component } from "react";
import AddFlashcard from "./AddFlashcard";
import "../css/Add.css";

class Add extends Component {
  render() {
    return (
      <div className="Add">
        <h1> I'm the add section, bruh.</h1>
        <AddFlashcard />
      </div>
    );
  }
}

export default Add;
