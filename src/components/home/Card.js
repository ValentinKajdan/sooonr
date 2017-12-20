import React, { Component } from 'react';
import Pics from './Pics';
import Details from './Details';
import TitleCard from './TitleCard';
import { Link } from 'react-router';
require ('../../assets/css/Home.css');

class Card extends Component {

  constructor(props) {
    super(props);
    this.state = {
      kiff: props.Kiff
    };
  }

  addValue = () => {
    const newKiff = this.props.Kiff + 1;
    if (newKiff != this.state.kiff) {
      this.setState({
        kiff : newKiff
      });
    }

}

  render() {

    return (
      <article className="card shadow">
        <div className="vote">
          <span>
            {this.state.kiff}
          </span>
        </div>
        <Link to={`/son/${this.props.sonId}`}>
          <Pics Ref={this.props.Ref} pic={this.props.pic} />
        </Link>
        <TitleCard LinkVideo={this.props.LinkVideo} Date={this.props.Date} Author={this.props.Author} Title={this.props.Title} sonId={this.props.sonId} />
      </article>
    );


    // return (
    //   <article className="son shadow">
    //     <TitleCard Title={this.props.Title} LinkVideo={this.props.LinkVideo} />
    //     <Pics Ref={this.props.Ref} />
    //     <Details Desc={this.props.Desc} Author={this.props.Author} Date={this.props.Date} kiff={this.state.kiff} />
    //     <button onClick={this.addValue}>clic</button>
    //   </article>
    // );
  }
}

export default Card;
