import React, { Component } from 'react';
import Pics from './Pics';
import Details from './Details';
import TitleCard from './TitleCard';
require ('../../assets/css/Home.css');

class Son extends Component {

  constructor(props) {
    super(props);
    this.state = {
      kiff: 124
    };
  }

  render() {

    return (
      <article className="son">
        <TitleCard Title={this.props.Title} LinkVideo={this.props.LinkVideo} />
        <Pics LinkPics={this.props.Pics} />
        <Details Desc={this.props.Desc} Author={this.props.Author} Date={this.props.Date} kiff={this.state.kiff} />
      </article>
    );
  }
}

export default Son;
