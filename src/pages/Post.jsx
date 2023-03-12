import React from "react";
import { Sidebar, PostWrapper } from "../Components";
import "../Styles/post.scss";

const Post = () => {
  return (
    <div className="app__post">
      <Sidebar />
      <PostWrapper />
    </div>
  );
};

export default Post;
