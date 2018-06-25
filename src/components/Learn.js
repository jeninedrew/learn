import React, { Component } from "react";
import { rando, makeLearningSlug } from "../js/helper.js";

class Learn extends Component {
  goToLearn = e => {
    // get the array of learning resources for each respective component
    const allLearning = this.props.data;
    // grab a random learning which will be the drill down resource
    const randoLearning = rando(allLearning);
    const singleRandoLearning = randoLearning.title;
    const singleRandoLearningSlug = makeLearningSlug(singleRandoLearning);
    this.props.history.push(`/learning/${singleRandoLearningSlug}`);
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
