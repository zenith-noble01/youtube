import React from "react";
import "../Styles/friends.scss";
import { recentRequest } from "../Constants/dummy";

const Friends = () => {
  return (
    <div className="friends__container">
      {recentRequest.map((request, index) => (
        <div className="friend__container" key={index}>
          <img src={request.profile} alt="" />
          <p>
            {request.name} <span>Last seen recently</span>
          </p>
        </div>
      ))}
    </div>
  );
};

export default Friends;
