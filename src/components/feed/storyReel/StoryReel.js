import React from "react";
import Story from "./story/Story";
import "./StoryReel.css";

const StoryReel = () => {
  return (
    <div className="storyReel">
      <Story profileSrc="ko" image="./assets/steve.jpg" title="Momen Daoud" />
      <Story profileSrc="ko" image="./assets/steve.jpg" title="Momen Daoud" />
      <Story
        profileSrc="ko"
        image="./assets/steve.jpg"
        title="Momen Daoud"
      />{" "}
    </div>
  );
};

export default StoryReel;
