import React, { Component } from 'react';
import Card from './Card';
require ('../../assets/css/Home.css');

class Content extends Component {

  refYoutube(string) {
    return string.split("=")[1];
  }

  render() {
    const datas = [
      {
        id : 1,
        title : "Suik'on Blaze AD - Plus Belle La Vie",
        linkVideo : "https://www.youtube.com/watch?v=M8svcRUtRuw",
        desc : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin tincidunt arcu sit amet porttitor ultricies. Aliquam non sapien rhoncus, ultrices sem eu, consequat neque. Sed ornare dui libero. Nulla vitae tempor metus. Etiam vel semper risus. Ut eu finibus purus, id porta quam. In imperdiet pharetra magna id blandit. Fusce ullamcorper pellentesque mauris vel faucibus.",
        author : "Vioster",
        date : "20/01/2017",
        kiff : 96
      },
      {
        id : 2,
        title : "Neyg, Lazare, Polo, Le Bon Nob, Chris Taylor, Loko, Dem - Freestyle",
        linkVideo : "https://www.youtube.com/watch?v=HHIpDuzIU0k",
        desc : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin tincidunt arcu sit amet porttitor ultricies. Aliquam non sapien rhoncus, ultrices sem eu, consequat neque. Sed ornare dui libero. Nulla vitae tempor metus. Etiam vel semper risus. Ut eu finibus purus, id porta quam. In imperdiet pharetra magna id blandit. Fusce ullamcorper pellentesque mauris vel faucibus.",
        author : "Vioster",
        date : "21/01/2017",
        kiff : 124
      },
      {
        id : 3,
        title : "Fadah (saydatyph/omerta) - Jamais à l'heure - Prod by Mani Deiz",
        linkVideo : "https://www.youtube.com/watch?v=HP0qJf34kfk",
        desc : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin tincidunt arcu sit amet porttitor ultricies. Aliquam non sapien rhoncus, ultrices sem eu, consequat neque. Sed ornare dui libero. Nulla vitae tempor metus. Etiam vel semper risus. Ut eu finibus purus, id porta quam. In imperdiet pharetra magna id blandit. Fusce ullamcorper pellentesque mauris vel faucibus.",
        author : "Vioster",
        date : "21/01/2017",
        kiff : 36
      },
      {
        id : 4,
        title : "Tekilla - ALBUM COMPLET - Le Retour Du Sombre Héros",
        linkVideo : "https://www.youtube.com/watch?v=NqeEpkswZ9Q",
        desc : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin tincidunt arcu sit amet porttitor ultricies. Aliquam non sapien rhoncus, ultrices sem eu, consequat neque. Sed ornare dui libero. Nulla vitae tempor metus. Etiam vel semper risus. Ut eu finibus purus, id porta quam. In imperdiet pharetra magna id blandit. Fusce ullamcorper pellentesque mauris vel faucibus.",
        author : "Vioster",
        date : "21/01/2017",
        kiff : 29
      },{
        id : 5,
        title : "Suik'on Blaze AD - Plus Belle La Vie",
        linkVideo : "https://www.youtube.com/watch?v=M8svcRUtRuw",
        desc : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin tincidunt arcu sit amet porttitor ultricies. Aliquam non sapien rhoncus, ultrices sem eu, consequat neque. Sed ornare dui libero. Nulla vitae tempor metus. Etiam vel semper risus. Ut eu finibus purus, id porta quam. In imperdiet pharetra magna id blandit. Fusce ullamcorper pellentesque mauris vel faucibus.",
        author : "Vioster",
        date : "20/01/2017",
        kiff : 96
      },
      {
        id : 6,
        title : "Neyg, Lazare, Polo, Le Bon Nob, Chris Taylor, Loko, Dem - Freestyle",
        linkVideo : "https://www.youtube.com/watch?v=HHIpDuzIU0k",
        desc : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin tincidunt arcu sit amet porttitor ultricies. Aliquam non sapien rhoncus, ultrices sem eu, consequat neque. Sed ornare dui libero. Nulla vitae tempor metus. Etiam vel semper risus. Ut eu finibus purus, id porta quam. In imperdiet pharetra magna id blandit. Fusce ullamcorper pellentesque mauris vel faucibus.",
        author : "Vioster",
        date : "21/01/2017",
        kiff : 124
      },
      {
        id : 7,
        title : "Fadah (saydatyph/omerta) - Jamais à l'heure - Prod by Mani Deiz",
        linkVideo : "https://www.youtube.com/watch?v=HP0qJf34kfk",
        desc : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin tincidunt arcu sit amet porttitor ultricies. Aliquam non sapien rhoncus, ultrices sem eu, consequat neque. Sed ornare dui libero. Nulla vitae tempor metus. Etiam vel semper risus. Ut eu finibus purus, id porta quam. In imperdiet pharetra magna id blandit. Fusce ullamcorper pellentesque mauris vel faucibus.",
        author : "Vioster",
        date : "21/01/2017",
        kiff : 36
      },
      {
        id : 8,
        title : "Tekilla - ALBUM COMPLET - Le Retour Du Sombre Héros",
        linkVideo : "https://www.youtube.com/watch?v=NqeEpkswZ9Q",
        desc : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin tincidunt arcu sit amet porttitor ultricies. Aliquam non sapien rhoncus, ultrices sem eu, consequat neque. Sed ornare dui libero. Nulla vitae tempor metus. Etiam vel semper risus. Ut eu finibus purus, id porta quam. In imperdiet pharetra magna id blandit. Fusce ullamcorper pellentesque mauris vel faucibus.",
        author : "Vioster",
        date : "21/01/2017",
        kiff : 29
      }
    ]

    return (
      <div className="content">
        {/*<h2>Derniers sons</h2>*/}
        { datas.map((data) =>
          <Card key={data.id} Ref={this.refYoutube(data.linkVideo)} Title={data.title} LinkVideo={data.linkVideo} Pics={data.pics} Desc={data.desc} Author={data.author} Date={data.date} Kiff={data.kiff} />
        )}
      </div>
    );
  }
}

export default Content;
