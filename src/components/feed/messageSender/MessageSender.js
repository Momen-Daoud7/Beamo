import React from "react";
import { Avatar } from "@material-ui/core";
import { PhotoLibrary, Videocam, InsertEmoticon } from "@material-ui/icons";
import { Button } from "@material-ui/core";
import "./MessageSender.css";
import { useState } from "react";
import { useSelector } from "react-redux";
import db from "../../../firebase/firebase";
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

const MessageSender = () => {
  const [text, setText] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const { user } = useSelector((state) => state.users);
  const submitHandler = (e) => {
    e.preventDefault();
    if (text.trim().length > 0) {
      db.collection("posts").add({
        message: text,
        profilePic: user.photoURL,
        username: user.displayName,
        image: imageUrl,
        timestamps: firebase.firestore.FieldValue.serverTimestamp(),
      });
    }
    setText("");
    setImageUrl("");
  };
  return (
    <div className="messageSender">
      <div className="messageSender__top">
        <Avatar src={user.photoURL} />
        <form onSubmit={submitHandler}>
          <input
            placeholder={`What's on your mind, ${user.displayName} ?`}
            className="messageSender__input"
            onChange={(e) => setText(e.target.value)}
            value={text}
          />
          <input
            placeholder="Optional: enter image url"
            onChange={(e) => setImageUrl(e.target.value)}
            className="messageSender__imgInput"
            value={imageUrl}
          />
          <Button type="submit">Post</Button>
        </form>
      </div>
      <div className="messageSender__bottom">
        <div className="messageSender__option">
          <Videocam style={{ color: "red" }} />
          <h3>Live video</h3>
        </div>
        <div className="messageSender__option">
          <PhotoLibrary style={{ color: "green" }} />
          <h3>Photos/videos</h3>
        </div>
        <div className="messageSender__option">
          <InsertEmoticon style={{ color: "orange" }} />
          <h3>Feelings/Activity</h3>
        </div>
      </div>
    </div>
  );
};

export default MessageSender;
