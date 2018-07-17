import React, { Component } from "react";
import "../css/Add.css";

class Add extends Component {
  titleRef = React.createRef();
  linkRef = React.createRef();
  typeRef = React.createRef();

  createLearn = e => {
    // stop default form behavior
    e.preventDefault();
    const learn = {
      // just add the other properties here
      title: this.titleRef.current.value,
      link: this.linkRef.current.value,
      type: this.typeRef.current.value
    };
    this.props.addLearn(learn);
    // refresh form
    e.currentTarget.reset();
  };
  render() {
    return (
      <div className="Add">
        <h2>+</h2>
        <form className="add-learn" onSubmit={this.createLearn}>
          <input
            name="title"
            ref={this.titleRef}
            type="text"
            placeholder="Title"
          />
          <input
            name="link"
            ref={this.linkRef}
            type="text"
            placeholder="Q or link"
          />
          <select name="type" ref={this.typeRef}>
            <option value="" default>
              ---
            </option>
            <option value="">Dang Q</option>
            <option value="">Reps Q</option>
            <option value="">Read</option>
            <option value="">Watch</option>
            <option value="">Tutorial</option>
          </select>
          <button type="submit">Add</button>
        </form>
      </div>
    );
  }
}

export default Add;
