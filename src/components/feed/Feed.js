import React from "react";
import "./Feed.css";
import MessageSender from "./messageSender/MessageSender";
import Post from "./post/Post";
import StoryReel from "./storyReel/StoryReel";

const Feed = () => {
  return (
    <div className="feed">
      <StoryReel />
      <MessageSender />
      <Post username="Momen Daoud" message="Nice" profilePic="n" />
    </div>
  );
};

export default Feed;
