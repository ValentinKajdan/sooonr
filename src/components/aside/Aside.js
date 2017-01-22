import React, { Component } from 'react';
import { Link } from 'react-router';
import RaisedButton from 'material-ui/RaisedButton';
import FontIcon from 'material-ui/FontIcon';
import Banner from './Banner';

require ('../../assets/css/Aside.css');

class Aside extends Component {
  render () {

    return (

      <aside className="aside shadow">
        <RaisedButton label="Nouveau son" fullWidth={true} icon={<FontIcon className="muidocs-icon-action-home" />} />
        <FontIcon
          className="muidocs-icon-action-home"
        />
        <Banner />
      </aside>

    );
  }
}

export default Aside;
