import React, { Component } from "react";
import "../css/Menu.css";

class Menu extends Component {
  render() {
    return (
      <ul className="Menu">
        <a href="/hello">
          <li>Hello</li>
        </a>
        <a href="/my-dogs">
          <li>My Dogs</li>
        </a>
        <a href="#">
          <li>#</li>
        </a>
      </ul>
    );
  }
}

export default Menu;
