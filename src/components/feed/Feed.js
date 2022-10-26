import React, { useEffect, useState } from "react";
import "./Feed.css";
import MessageSender from "./messageSender/MessageSender";
import Post from "./post/Post";
import StoryReel from "./storyReel/StoryReel";
import db from "../../firebase/firebase";

const Feed = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    db.collection("posts").onSnapshot((snapshot) => {
      setPosts(snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() })));
    });
  }, []);
  console.log(posts);
  return (
    <div className="feed">
      <StoryReel />
      <MessageSender />
      {posts &&
        posts.map((post) => (
          <Post
            key={post.id}
            username={post.data.username}
            message={post.data.message}
            profilePic={post.data.profilePic}
            timestamps={post.data.timestamps}
          />
        ))}
    </div>
  );
};

export default Feed;
