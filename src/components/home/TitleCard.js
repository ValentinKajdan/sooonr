import React, { Component } from 'react';
require ('../../assets/css/Home.css');
import RaisedButton from 'material-ui/RaisedButton';
import { Link } from 'react-router';

class TitleCard extends Component {

  constructor(props) {
    super(props);
  }

  render() {

    console.log(this.props);

    return (
    <div className="titleCard">
      <a href="">
        <h3>
          {this.props.Title}
        </h3>
      </a>
      <span>
        <a href={this.props.LinkVideo} target="_blank">
          <RaisedButton label="Lien" backgroundColor="#C62828" labelColor="#fff" />
        </a>
      </span>
    </div>
    );
  }


}

export default TitleCard;