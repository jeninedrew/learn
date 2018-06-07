import React, { Component } from "react";
import "../css/Header.css";
import logo from "../images/logo.svg";

class Header extends Component {
  render() {
    return (
      <header className="Header">
        <img src={logo} className="Header-logo" alt="logo" />
      </header>
    );
  }
}

export default Header;
