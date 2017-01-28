import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { StickyContainer, Sticky } from 'react-sticky';
import Menu from '../menu/Menu';
import Aside from '../aside/Aside';

require ('../../assets/css/Home.css');

class Single extends Component {
  render() {

    return (
      <MuiThemeProvider>
        <div>
          <Menu />
          <div className="container">
            <StickyContainer>
              <div>salut</div>
              <Aside />
            </StickyContainer>
          </div>
        </div>
    </MuiThemeProvider>
    );
  }
}

export default Single;
