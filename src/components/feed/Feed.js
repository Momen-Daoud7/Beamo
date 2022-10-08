import React from "react";
import "./Feed.css";
import MessageSender from "./messageSender/MessageSender";
import StoryReel from "./storyReel/StoryReel";

const Feed = () => {
  return (
    <div className="feed">
      <StoryReel />
      <MessageSender />
    </div>
  );
};

export default Feed;
