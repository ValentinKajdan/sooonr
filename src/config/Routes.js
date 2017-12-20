import React, { Component } from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

// Routes Import
import Home from '../components/home/Home';
import Single from '../components/single/Single';
import NoMatch from '../components/404';
// import Api from '../../api/get_posts.php';
// import Api from '../components/home/Home';

class Routes extends Component {
  render() {
    return (
      <Router history={browserHistory}>
        <Route path="/" component={Home}>
          <IndexRoute component={Home}/>
        </Route>
        <Route path="/son/(:son_id)" component={Single}/>
        <Route path="*" component={NoMatch}/>
      </Router>
    )
  }
}

export default Routes;
