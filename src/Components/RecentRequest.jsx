import React from "react";
import { recentRequest } from "../Constants";

const RecentRequest = () => {
  return (
    <div className="recent__requests">
      {recentRequest.map((request, index) => (
        <div className="request__container" key={index}>
          <div className="request__user">
            <img src={request.profile} alt="" />
            <p>{request.name}</p>
          </div>
          <div className="request__actions">
            <button>Acept</button>
            <button>Decline</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default RecentRequest;
