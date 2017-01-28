import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import FontIcon from 'material-ui/FontIcon';
import ActionAdd from 'material-ui/svg-icons/content/add';
import { StickyContainer, Sticky } from 'react-sticky';
import Banner from './Banner';

require ('../../assets/css/Aside.css');

class Aside extends Component {
  render () {

    return (

      <Sticky topOffset={-20} stickyClassName={"margintop"}>
        <aside className="aside shadow">
          <RaisedButton backgroundColor="#3F51B5" labelColor="#fff" label="Nouveau son" fullWidth={true} icon={<ActionAdd />} />
          <FontIcon
            className="muidocs-icon-action-home"
          />
          <Banner />
        </aside>
      </Sticky>

    );
  }
}

export default Aside;
