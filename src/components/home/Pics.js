import React, { Component } from 'react';
import { Link } from 'react-router';

require ('../../assets/css/Home.css');

class Pics extends Component {

  constructor(props) {
    super(props);
  }


  render() {

    const linkPics = `https://i.ytimg.com/vi/${this.props.Ref}/hqdefault.jpg`

    return (
      <div className="pics">
        
        <img src={linkPics} alt="thumbnails" title={this.props.Title} />
      </div>
    );
  }


}

export default Pics;
