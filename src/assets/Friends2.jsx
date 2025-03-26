import {use} from "react";

const Friends2 = ({FriendsPromise2}) => {
  const FriendsPosts = use(FriendsPromise2);



  return <div>
<h1> friends list: {FriendsPosts.length}</h1>
  </div>;
};

export default Friends2;
