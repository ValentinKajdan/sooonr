import React, { Component } from 'react';
import logo from '../../assets/images/logo.png';
import { Link } from 'react-router';
import FlatButton from 'material-ui/FlatButton';

require ('../../assets/css/Menu.css');

class Menu extends Component {
  render () {

    return (
      <header className="menu">
        <a>
          <Link to={`/`} >
            <img src={logo} className="App-logo" alt="logo" />
          </Link>
        </a>
        <ul className="nav">
          <Link to={`/`} ><li><FlatButton label="Home" /></li></Link>
          <Link to={`/`} ><li><FlatButton label="Contact" /></li></Link>
          <Link to={`/`} ><li><FlatButton label="Connexion" /></li></Link>
        </ul>
      </header>
    );
  }
}

export default Menu;
