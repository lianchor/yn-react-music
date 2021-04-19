import YNDiscover from "@/pages/discover";
import YNFriend from "@/pages/friends";
import YNMine from "@/pages/mine";


const routes = [{
  path:"/",
  exact:true,
  component:YNDiscover
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

export default routes;
