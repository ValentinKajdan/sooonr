import React, { Component } from 'react';
require ('../../assets/css/Home.css');
import RaisedButton from 'material-ui/RaisedButton';
import Chip from 'material-ui/Chip';

class TitleCard extends Component {

  constructor(props) {
    super(props);
  }

  render() {

    return (
    <div className="titleCard">
      <h3>
        {this.props.Title}
      </h3>
      <span>
        <a href={this.props.LinkVideo} target="_blank">
          <RaisedButton label="Lien" backgroundColor="#C62828" labelColor="#fff" />
        </a>
      </span>
      <div className="tags">
        <Chip>Chill</Chip>
        <Chip>Old School</Chip>
      </div>
    </div>
    );
  }


}

export default TitleCard;
