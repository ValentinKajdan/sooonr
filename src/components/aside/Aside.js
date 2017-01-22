import React, { Component } from 'react';
import { Link } from 'react-router';
import FlatButton from 'material-ui/FlatButton';
import { StickyContainer, Sticky } from 'react-sticky';
import Banner from './Banner';

require ('../../assets/css/Aside.css');

class Aside extends Component {
  render () {

    return (

      <aside className="aside shadow">
        <Banner />
      </aside>

    );
  }
}

export default Aside;
