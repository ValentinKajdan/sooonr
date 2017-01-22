import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Menu from '../menu/Menu';
import Aside from '../aside/Aside';
import Content from './Content';
import { StickyContainer, Sticky } from 'react-sticky';

require ('../../assets/css/Home.css');

class Home extends Component {
  render() {

    return (
      <MuiThemeProvider>
        <div className="Home">
          <Menu />
          <div className="container">
            <StickyContainer>
              <Content />
              <Sticky topOffset={-20} stickyClassName={"margintop"}>
                <Aside />
              </Sticky>
            </StickyContainer>
          </div>
        </div>
    </MuiThemeProvider>
    );
  }
}

export default Home;
