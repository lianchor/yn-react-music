import React  from 'react';
import { Redirect } from "react-router-dom";




// import YNDiscover from "@/pages/discover";
// import YNFriend from "@/pages/friends";
// import YNMine from "@/pages/mine";

const YNDiscover = React.lazy(_ => import("../pages/discover"));

// const YNRecommend = React.lazy(_ => import("../pages/discover/c-pages/recommend"));
// const YNRanking = React.lazy(_ => import("../pages/discover/c-pages/ranking"));
// const YNSongs = React.lazy(_ => import("../pages/discover/c-pages/songs"));
// const YNDjradio = React.lazy(_ => import("../pages/discover/c-pages/djradio"));
const YNArtist = React.lazy(_ => import("../pages/discover/c-pages/artist"));
// const YNAlbum = React.lazy(_ => import("../pages/discover/c-pages/album"));
// const YNPlayer = React.lazy(_ => import("../pages/player"));

const YNFriend= React.lazy(_ => import("../pages/friends"));
const YNMine = React.lazy(_ => import("../pages/mine"));

const routes = [{
  path:"/",
  exact:true,
  render:() =>(
    <Redirect to="/discover"/>
  )
},
{
  path:"/discover",
  component: YNDiscover,
  routes:[
    {
      path:"/discover",
      exact:true,
      render:() =>(
        <Redirect to={"/discover/artist"} />
      )
    },
    {
        path: "/discover/artist",
        component: YNArtist 
    }
  ]
},
{
  path:"/mine",
  component:YNMine,
},
{
  path:"/friend",
  component:YNFriend,
}
];

export default routes
