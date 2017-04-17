import React from 'react';
import ReactDOM from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import Database from './config/Database';
import Routes from './config/Routes';

import "./assets/css/style.css";

ReactDOM.render(
  <Routes />,
  document.getElementById('root')
);
