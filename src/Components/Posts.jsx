import React from "react";
import { posts } from "../Constants/dummy";
import { Post } from "./";
import "../Styles/posts.scss";

const Posts = () => {
  return (
    <div className="posts__container">
      {posts.map((post, index) => (
        <Post key={index} post={post} />
      ))}
    </div>
  );
};

export default Posts;
