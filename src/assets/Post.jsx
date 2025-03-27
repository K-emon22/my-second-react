import {use} from "react";
// import Post2 from "./Post2";
const Post = ({PostPromis}) => {
  const Posts = use(PostPromis);

  return (
    <div>
      <h1>Posts List:</h1>

      {Posts.map((Post) => <Post2 key={Post.id} Post={Post}>  </Post2>)}
    </div>
  );
};



const Post2 = ({Post}) => {
    const {userId,id,body,tile}=Post
  return (
    <div style={{backgroundColor: "", border: "2px solid yellow" ,padding:'20px' ,borderRadius:'30px'}}>
        <h2> Id : {id} </h2>
        <h2> UserId :{userId}  </h2>
        <h2> Title : {tile} </h2>
        <h2> Body :{body} </h2>
    </div>
  )
};

// export default Post2;
 
export default Post;
