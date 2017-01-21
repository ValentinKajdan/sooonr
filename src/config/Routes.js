import React, { Component } from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

// Routes Import
import Home from '../components/home/Home';

class Routes extends Component {
  render() {
    return (
      <Router history={browserHistory}>
        <Route path="/" component={Home}>
          <IndexRoute component={Home}/>
        </Route>
      </Router>
    )
  }
}

export default Routes;
