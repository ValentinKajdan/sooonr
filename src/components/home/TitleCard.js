import React, { Component } from 'react';
require ('../../assets/css/Home.css');
import RaisedButton from 'material-ui/RaisedButton';
import Chip from 'material-ui/Chip';
import { Link } from 'react-router';

class TitleCard extends Component {

  constructor(props) {
    super(props);
  }

  render() {

    return (
    <div className="titleCard">
      {/*<span>
        <a href={this.props.LinkVideo} target="_blank">
          <RaisedButton label="Lien" backgroundColor="#C62828" labelColor="#fff" />
        </a>
      </span>*/}
      <Link to={`/son/${this.props.sonId}`}>
        <h3>
          {this.props.Title}
        </h3>
      </Link>
      {/*<span>
        Le {this.props.Date } par {this.props.Author}
      </span> */}
      <div className="tags">
        <Chip>Chill</Chip>
        <Chip>Old School</Chip>
      </div>
    </div>
    );
  }


}

export default TitleCard;
