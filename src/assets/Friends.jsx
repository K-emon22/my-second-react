import {use} from "react";

const Friends = ({FriendsPromise}) => {
  const Friends = use(FriendsPromise);
  return (
    <div>
      <h1
        style={{border: "2px solid red", padding: "50px", borderRadius: "30px"}}
      >
        Friends:- {Friends.length}
      </h1>
    </div>
  );
};

export default Friends;
