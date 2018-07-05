import React, { Component } from "react";
import Learning from "./Learning";

class Learn extends Component {
  render() {
    return (
      <div onClick={this.goToLearn}>
        <h1>{this.props.title}</h1>
        <Learning />
      </div>
    );
  }
}

export default Learn;

// Based on the shown value, the background color goes from gereen to red indicating how much effort I should give this thing!

/*
console.log(this);
    console.log(this.props);
    console.log(this.props.learning);
    // Spit out a random learning item to display onClick
    const randomLearning = rando(this.props.data);
    console.log(randomLearning);
*/

/*
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

  randoLearn(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
  }

export default Learn;

*/
