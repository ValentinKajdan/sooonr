import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { StickyContainer, Sticky } from 'react-sticky';
import Menu from '../menu/Menu';
import Aside from '../aside/Aside';
import Content from './Content';
import $ from "jquery";

require ('../../assets/css/Home.css');
// require ('../../config/Database.js');

class Home extends Component {

  // getInitialState() {
  //   return {
  //       posts: []
  //   };
  // }

  componentDidMount() {
    // console.log($.get("http://localhost/propers%project/propers/api/get_posts.php"));
    this.serverRequest = $.get("../../../api/get_posts.php", function (posts) {
    console.log("post", posts);
        this.setState({
            posts: JSON.parse(posts)
        });
    }.bind(this));


    // $('.page-header h1').text('Create product');
  }

  componentWillUnmount() {
    this.serverRequest.abort();
  }

  render() {
      // console.log(this.state);


    return (
      <MuiThemeProvider>
        <div className="Home">
          <Menu />
          <div className="container">
            <StickyContainer>
              <Content />
              <Aside />
            </StickyContainer>
          </div>
        </div>
    </MuiThemeProvider>
    );
  }
}

export default Home;
