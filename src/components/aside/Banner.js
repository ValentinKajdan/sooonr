import React, { Component } from 'react';
import { Link } from 'react-router';
import FlatButton from 'material-ui/FlatButton';

require ('../../assets/css/Aside.css');

class Banner extends Component {
  render () {

    return (

      <div className="banner">
        <h3>
          Catégories
        </h3>
      </div>

    );
  }
}

export default Banner;
