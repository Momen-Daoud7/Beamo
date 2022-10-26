import { Avatar } from "@material-ui/core";
import {
  AccountCircle,
  ChatBubbleOutline,
  ExpandMore,
  NearMe,
  ThumbUp,
} from "@material-ui/icons";
import React from "react";
import "./Post.css";

const Post = ({ profilePic, image, username, timestamps, message }) => {
  console.log(timestamps);
  return (
    <div className="post">
      <div className="post__top">
        <Avatar className="post__avatar" src={profilePic} />
        <div className="post__topInfo">
          <h4>{username}</h4>
          <p>{new Date(timestamps?.toDate()).toUTCString()}</p>
        </div>
      </div>
      <div className="post__bottom">
        <p>{message}</p>
      </div>

      <div className="post__image">
        <img src={image} alt="" />
      </div>
      <div className="post__options">
        <div className="post__option">
          <ThumbUp />
          <p>Like</p>
        </div>
        <div className="post__option">
          <ChatBubbleOutline />
          <p>Comments</p>
        </div>
        <div className="post__option">
          <NearMe />
          <p>Share</p>
        </div>
        <div className="post__option">
          <AccountCircle />
          <ExpandMore />
        </div>
      </div>
    </div>
  );
};

export default Post;
