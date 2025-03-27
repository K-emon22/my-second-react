import {use} from "react";
import Friend2Use from "./Friend2Use";

const Friends2 = ({FriendsPromise2}) => {
  const FriendsPosts = use(FriendsPromise2);

  return (
    <div>
      <h1> friends list: {FriendsPosts.length}</h1>
      {FriendsPosts.map((Friend) => (
        <Friend2Use key={Friend.id} Friend={Friend}> </Friend2Use>
      ))}
    </div>
  );
};

export default Friends2;
