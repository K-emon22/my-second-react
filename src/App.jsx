import {Suspense} from "react";
import "./App.css";
import Runs from "./assets/Bangladesh";
import Count from "./assets/count";

import Friends from "./assets/Friends";
import Friends2 from "./assets/Friends2";
import Post from "./assets/Post";

const FetchUserId = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  return res.json();
};

const FetchFriends2 = async () => {
  const FetchUser = await fetch("https://jsonplaceholder.typicode.com/users");
  return FetchUser.json();
};

const PostUser = async () => {
  const PostOfUsers = await fetch("https://jsonplaceholder.typicode.com/posts");
  return PostOfUsers.json();
};
function App() {
  const PostPromis = PostUser();
  const FriendsPromise = FetchUserId();
  const FriendsPromise2 = FetchFriends2();
  const HandleButton = () => {
    alert("react is not moja");
  };

  const HandleButton2 = (num, mum) => {
    const newNumber = num + 5 + mum;
    alert(newNumber);
  };

  return (
    <>
      <h3>Vite + React</h3>

      <Suspense fallback={<h2> Posts are Loading</h2>}>
        <Post PostPromis={PostPromis}></Post>
      </Suspense>

      <Suspense fallback={<h2> loding friends......</h2>}>
        <Friends2 FriendsPromise2={FriendsPromise2}> </Friends2>
      </Suspense>

      {/* <Suspense
        fallback={
          <h2 style={{backgroundColor: "red", border: "2px solid white"}}> </h2>
        }
      >
        <Friends FriendsPromise={FriendsPromise}></Friends>
      </Suspense> */}

      <Count></Count>
      <Runs></Runs>

      <button
        onClick={HandleButton}
        style={{fontWeight: "bolder", color: "red", fontSize: "20px"}}
      >
        {" "}
        Clicked{" "}
      </button>

      <button
        onClick={() => {
          HandleButton2(30, 40);
        }}
        style={{fontWeight: "bolder", color: "blue", fontSize: "20px"}}
      >
        {" "}
        Clicked{" "}
      </button>
    </>
  );
}

export default App;
