import React from "react";
import "../Styles/profile.scss";
import { BiPencil } from "react-icons/bi";
import { Posts, Sidebar } from "../Components";
import { cover, user } from "../Images";
import { Link } from "react-router-dom";

const Profile = () => {
  return (
    <div className="app__profile">
      <Sidebar />
      <div className="profile__container">
        <div className="profile__wrapper">
          <div className="cover__container">
            <img src={cover} draggable={false} className="coverImg" alt="" />
          </div>
          <div className="profile__content">
            <img src={user} draggable={false} className="profile__img" alt="" />
          </div>
          <div className="user__profileData">
            <div className="userName">
              <h1>Code Env</h1>
              <p>
                <span>100 followers</span>
                <span>349 following </span>
              </p>
            </div>
            <Link to="/profile/222/edit">
              <BiPencil /> Edit Profile
            </Link>
          </div>
        </div>
        <div className="user__data">
          <Posts />
        </div>
      </div>
    </div>
  );
};

export default Profile;
