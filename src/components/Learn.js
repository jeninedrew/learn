import React, { Component } from "react";

class Learn extends Component {
  goToLearn = e => {
    console.log(this);
  };
  render() {
    return (
      <div onClick={this.goToLearn}>
        <h1>{this.props.title}</h1>
      </div>
    );
  }
}

export default Learn;
