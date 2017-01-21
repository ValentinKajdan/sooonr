import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Menu from '../menu/Menu';
import Content from './Content';
require ('../../assets/css/Home.css');

class Home extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div className="Home">
          <Menu />
          <Content />
        </div>
    </MuiThemeProvider>
    );
  }
}

export default Home;
