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
      <Link to={`/`} >
        <div className="pics">
          <img src={linkPics} alt="thumbnails" width="350" />
        </div>
      </Link>
    );
  }


}

export default Pics;
