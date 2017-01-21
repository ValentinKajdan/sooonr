import React, { Component } from 'react';
import Son from './Son';
require ('../../assets/css/Home.css');

class Content extends Component {
  render() {

    const title = "Suik'on Blaze AD - Plus Belle La Vie";
    const linkVideo = "https://www.youtube.com/watch?v=M8svcRUtRuw";
    const pics = "https://img.youtube.com/vi/M8svcRUtRuw/maxresdefault.jpg";
    const desc = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin tincidunt arcu sit amet porttitor ultricies. Aliquam non sapien rhoncus, ultrices sem eu, consequat neque. Sed ornare dui libero. Nulla vitae tempor metus. Etiam vel semper risus. Ut eu finibus purus, id porta quam. In imperdiet pharetra magna id blandit. Fusce ullamcorper pellentesque mauris vel faucibus.";
    const author = "Vioster";
    const date = "20/01/2017";

    return (
      <div className="content">
        {/*<h2>Derniers sons</h2>*/}
        <Son Title={title} LinkVideo={linkVideo} Pics={pics} Desc={desc} Author={author} Date={date} />
      </div>
    );
  }
}

export default Content;
