import React, { Component } from "react";

class AddFlashcard extends Component {
  questionRef = React.createRef();
  answerRef = React.createRef();
  colorRef = React.createRef();

  createFlashcard = event => {
    // Stop the form from submitting!
    event.preventDefault();
    console.log(this.answerRef.value.value);
    // Pull the values out of the form
  };

  render() {
    return (
      <form onSubmit={this.createFlashcard}>
        <textarea
          name="question"
          ref={this.questionRef}
          type="text"
          placeholder="question"
        />
        <textarea
          name="answer"
          ref={this.answerRef}
          type="text"
          placeholder="answer"
        />
        <select name="color" ref={this.colorRef}>
          <option default value="0">
            ⋯ Color? ⋯
          </option>
          <option value="1">Red</option>
          <option value="2">Orange</option>
          <option value="3">Yellow</option>
        </select>
        <button type="submit">Add!</button>
      </form>
    );
  }
}

export default AddFlashcard;
