import React, { Component } from "react";

class Menu extends Component {
  render() {
    return (
      <ul>
        <a href="/hello">
          <li>Hello!</li>
        </a>
        <a href="/my-dogs">
          <li>My Dogs</li>
        </a>
      </ul>
    );
  }
}

export default Menu;
