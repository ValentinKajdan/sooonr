import React, { Component } from 'react';
require ('../../assets/css/Home.css');

class Details extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
    <div className="details">
      <p>{this.props.Desc}</p>
      <div className="detailsPost">
        <span>Par {this.props.Author}</span>
        <span>Le {this.props.Date}</span>
        <div className="kiff" >
          <span>{this.props.kiff}</span>
        </div>
      </div>
    </div>
    );
  }


}

export default Details;
