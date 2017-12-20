import React, { Component } from 'react';
require ('../../assets/css/Home.css');
import RaisedButton from 'material-ui/RaisedButton';
import Chip from 'material-ui/Chip';
import { FormattedRelative, IntlProvider }  from 'react-intl';
import fr from 'react-intl/locale-data/fr';
import { addLocaleData } from 'react-intl';
addLocaleData([...fr]);
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
        <h3 title={this.props.Title}>
          {this.props.Title}
        </h3>
      </Link>
      <div className="tags">
        <Chip>Paris</Chip>
        <Chip>Musique</Chip>
      </div>
      <span className="dateAuthor">
        <IntlProvider locale={navigator.language}>
          <FormattedRelative value={Date.now()}/>
        </IntlProvider>, Par {this.props.Author}
      </span>
    </div>
    );
  }


}

export default TitleCard;
