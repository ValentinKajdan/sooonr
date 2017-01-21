import React, { Component } from 'react';
import logo from '../../assets/images/logo.png';
require ('../../assets/css/Menu.css');

class Menu extends Component {
  render () {
    return (
      <header className="menu">
        <img src={logo} className="App-logo" alt="logo" />
        <ul className="nav">
          <a href="#"><li>Home</li></a>
          <a href="#"><li>Test</li></a>
          <a href="#"><li>Contact</li></a>
        </ul>
      </header>
    );
  }
}

export default Menu;
