import React from "react";
import { Friends, RecentRequest } from "./";

const FeedSidebar = () => {
  return (
    <div className="home__feedSidebar">
      <RecentRequest />
      <Friends />
    </div>
  );
};

export default FeedSidebar;
