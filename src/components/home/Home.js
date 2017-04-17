import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { StickyContainer, Sticky } from 'react-sticky';
import Menu from '../menu/Menu';
import Aside from '../aside/Aside';
import Content from './Content';

require ('../../assets/css/Home.css');
// require ('../../config/Database.js');

class Home extends Component {
  render() {


    return (
      <MuiThemeProvider>
        <div className="Home">
          <Menu />
          <div className="container">
            <StickyContainer>
              <Content />
              <Aside />
            </StickyContainer>
          </div>
        </div>
    </MuiThemeProvider>
    );
  }
}

export default Home;
