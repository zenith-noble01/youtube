import React from "react";
import {
  BiBookmark,
  BiCommentDetail,
  BiDotsVerticalRounded,
  BiLike,
} from "react-icons/bi";
import { ImShare } from "react-icons/im";
import { Link } from "react-router-dom";

const Post = ({ post }) => {
  return (
    <div className="post__content">
      <div className="post__top">
        <div className="post__header">
          <div className="post__user">
            <img src={post.profile} alt="codemedia profile" />
            <div className="post__user-infos">
              <p>{post.username}</p>
              <span> 12 minutes ago</span>
            </div>
          </div>
          <ul className="post__options">
            <li>
              <BiBookmark />
            </li>
            <li>
              <BiDotsVerticalRounded />
            </li>
          </ul>
        </div>
        <p className="post__text">{post.text}</p>
      </div>
      <div className="post__preview">
        <Link to={`/post/${post.id}`}>
          <img src={post.img} alt="codemedia post" />
        </Link>

        <ul className="post__actions">
          <li>
            <BiLike /> Like <span>30</span>
          </li>
          <li>
            <BiCommentDetail /> Comment <span>30</span>
          </li>
          <li>
            <ImShare /> Share <span>30</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Post;
