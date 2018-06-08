import React, { Component } from "react";

class Menu extends Component {
  goToStore() {
    alert("Going to Store");
  }
  render() {
    return (
      <ul>
        <a href="/" onClick={this.goToStore}>
          <li>Hello!</li>
        </a>
        <a href="/" onClick={this.goToStore}>
          <li>Quote</li>
        </a>
        <a href="/" onClick={this.goToStore}>
          <li>Dog Pic</li>
        </a>
      </ul>
    );
  }
}

export default Menu;
