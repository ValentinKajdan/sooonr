import React, { Component } from 'react';
require ('../../assets/css/Home.css');

class Pics extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="pics">
        <img src={this.props.LinkPics} alt="miniature" width="350" />
      </div>
    );
  }


}

export default Pics;
