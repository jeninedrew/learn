import React, { Component } from "react";
import "../css/Header.css";
import logo from "../images/logo.svg";
import Menu from "../components/Menu";

class Header extends Component {
  render() {
    return (
      <header className="Header">
        <img src={logo} className="Header-logo" alt="logo" />
        <h1>{this.props.appTitle}</h1>
        <Menu />
      </header>
    );
  }
}

export default Header;
