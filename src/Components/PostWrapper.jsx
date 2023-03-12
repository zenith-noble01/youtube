import React from "react";
import { comments, posts } from "../Constants/dummy";
import { ImShare } from "react-icons/im";
import { user } from "../Images";
import { Link, useLocation } from "react-router-dom";
import {
  BiCommentDetail,
  BiDotsHorizontalRounded,
  BiLike,
  BiSmile,
} from "react-icons/bi";

const PostWrapper = () => {
  const location = useLocation();

  const pathname = location.pathname.split("/")[2];
  const post = posts.find((post) => post.id.toString() === pathname);

  return (
    <div className="post__wrapper">
      <div className="post__wrapper__container">
        <div className="post__img">
          <img src={post.img} alt="" />
        </div>
        <div className="post__wrapper__content">
          <div className="user__post">
            <Link to="/profile/2222" className="user__profile">
              <img src={post.profile} alt="" />
              <p>{post.username}</p>
            </Link>
            <BiDotsHorizontalRounded />
          </div>

          <div className="post__content">
            <p className="post__text">Lorem ipsum dolor sit amet.</p>
            <div className="comment__container">
              {comments.map((comment, index) => (
                <div className="comment" key={index}>
                  <Link to="/profile/222" className="profile">
                    <img src={user} alt="" />
                  </Link>
                  <p>
                    <b>Code {""}</b>
                    <span>
                      Lorem ipsum dolor sit amet consectetur adipisicing.
                    </span>
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="post__actions">
            <ul className="post__action__wrapper">
              <li>
                <BiLike /> Liked <span>30</span>{" "}
              </li>
              <li>
                <BiCommentDetail />
                Comment <span>30</span>{" "}
              </li>
              <li>
                <ImShare /> Share <span>30</span>{" "}
              </li>
            </ul>

            <div className="add__comment">
              <BiSmile />
              <input type="text" placeholder="Add a comment..." />
              <button>Post</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostWrapper;
