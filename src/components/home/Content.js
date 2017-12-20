import React, { Component } from 'react';
import Card from './Card';
import { Link } from 'react-router';
require ('../../assets/css/Home.css');

class Content extends Component {

  refYoutube(string) {
    return string.split("=")[1];
  }

  render() {
    const datas = [
      {
        id : 1,
        title : "Concert de rue - Reprise pop !",
        linkVideo : "https://www.youtube.com/watch?v=M8svcRUtRuw",
        desc : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin tincidunt arcu sit amet porttitor ultricies. Aliquam non sapien rhoncus, ultrices sem eu, consequat neque. Sed ornare dui libero. Nulla vitae tempor metus. Etiam vel semper risus. Ut eu finibus purus, id porta quam. In imperdiet pharetra magna id blandit. Fusce ullamcorper pellentesque mauris vel faucibus.",
        author : "Admin",
        date : "20/01/2017",
        kiff : 96,
        pic : "https://i.ytimg.com/vi/6h0z8fjSlLU/maxresdefault.jpg",
      },
      {
        id : 2,
        title : "Football Freestyle à la Zizou!",
        linkVideo : "https://www.youtube.com/watch?v=HHIpDuzIU0k",
        desc : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin tincidunt arcu sit amet porttitor ultricies. Aliquam non sapien rhoncus, ultrices sem eu, consequat neque. Sed ornare dui libero. Nulla vitae tempor metus. Etiam vel semper risus. Ut eu finibus purus, id porta quam. In imperdiet pharetra magna id blandit. Fusce ullamcorper pellentesque mauris vel faucibus.",
        author : "Admin",
        date : "21/01/2017",
        kiff : 49,
        pic : "https://i.ytimg.com/vi/ABigoJc-cwA/maxresdefault.jpg",
      },
      {
        id : 3,
        title : "John Doe Freestyle dans les rues de Paris !",
        linkVideo : "https://www.youtube.com/watch?v=HHIpDuzIU0k",
        desc : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin tincidunt arcu sit amet porttitor ultricies. Aliquam non sapien rhoncus, ultrices sem eu, consequat neque. Sed ornare dui libero. Nulla vitae tempor metus. Etiam vel semper risus. Ut eu finibus purus, id porta quam. In imperdiet pharetra magna id blandit. Fusce ullamcorper pellentesque mauris vel faucibus.",
        author : "Admin",
        date : "21/01/2017",
        kiff : 124,
        pic : "https://cdn.cameroonweb.com/imagelib/pics/73076546.jpg",
      },
    ]

    return (
      <div className="content">
        {/*<h2>Derniers sons</h2>*/}
        { datas.map((data) =>
            <Card key={data.id} pic={data.pic} sonId={data.id} Ref={this.refYoutube(data.linkVideo)} Title={data.title} LinkVideo={data.linkVideo} Pics={data.pics} Desc={data.desc} Author={data.author} Date={data.date} Kiff={data.kiff} />
        )}
      </div>
    );
  }
}

export default Content;
