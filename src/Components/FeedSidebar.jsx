import React from "react";
import { Friends, RecentRequest } from "./";

const FeedSidebar = () => {
  return (
    <div className="home__feedsidebar">
      <RecentRequest />
      <Friends />
    </div>
  );
};

export default FeedSidebar;
