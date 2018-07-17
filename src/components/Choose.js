import React, { Component } from "react";
import Header from "./Header";
import Color from "./Color";
import Footer from "./Footer";
import "../css/Choose.css";

class Choose extends Component {
  state = {
    learns: {}
  };
  addLearn = learn => {
    // To update state in react use React's Set State API:
    // 1. Take a copy of exisitng state so you aren't reaching into state and changing it directly cause it causes a mutation
    const learns = { ...this.state.learns };
    // 2. Now add the new learn to learns
    learns[`learn${Date.now()}`] = learn;
    //Set the new learns object to state
    this.setState({
      learns
    });
  };
  render() {
    return (
      <div className="Choose">
        <Header />
        <Color
          type="dang"
          push={this.props.history.push}
          addLearn={this.addLearn}
        />
        <Color
          type="reps"
          push={this.props.history.push}
          addLearn={this.addLearn}
        />
        <Color
          type="read"
          push={this.props.history.push}
          addLearn={this.addLearn}
        />
        <Color
          type="watch"
          push={this.props.history.push}
          addLearn={this.addLearn}
        />
        <Color
          type="tutorial"
          push={this.props.history.push}
          addLearn={this.addLearn}
        />
        <Footer />
      </div>
    );
  }
}

export default Choose;
