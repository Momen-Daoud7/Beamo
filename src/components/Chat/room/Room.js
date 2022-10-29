import { Avatar, IconButton } from "@material-ui/core";
import {
  AttachFile,
  InsertEmoticon,
  MoreVert,
  SearchOutlined,
  Send,
} from "@material-ui/icons";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router";
import db from "../../../firebase/firebase";
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "./Room.css";

const Room = () => {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);
  const [roomName, setRoomName] = useState("");
  const { roomId } = useParams();
  const { user } = useSelector((state) => state.users);

  useEffect(() => {
    if (roomId) {
      db.collection("rooms")
        .doc(roomId)
        .onSnapshot((snapshot) => setRoomName(snapshot.data().name));

      db.collection("rooms")
        .doc(roomId)
        .collection("messages")
        .orderBy("timestamps", "asc")
        .onSnapshot((snapshot) =>
          setMessages(snapshot.docs.map((doc) => doc.data()))
        );
    }
  }, [roomId]);

  const sendMessage = async (e) => {
    console.log(user);
    e.preventDefault();
    // if (input.trim().length > 0) {
    db.collection("rooms").doc(roomId).collection("messages").add({
      name: user.displayName,
      message: input,
      id: user.uid,
      timestamps: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setInput("");
    // }
  };
  return roomId ? (
    <div className="room">
      <div className="room__header">
        <Avatar src={`https://avatars.dicebear.com/api/human/${roomId}.svg`} />
        <div className="room__info">
          <h3>{roomName}</h3>
          <p>
            last seen at{" "}
            {messages.length > 0 &&
              new Date(
                messages[messages.length - 1].timestamps?.toDate()
              ).toUTCString()}
          </p>
        </div>
        <div className="room__headerRight">
          <IconButton>
            <SearchOutlined />
          </IconButton>
          <IconButton>
            <AttachFile />
          </IconButton>
          <IconButton>
            <MoreVert />
          </IconButton>
        </div>
      </div>
      <div className="room__body">
        {messages.map((message) => (
          <p
            className={`room__message ${
              message.id === user.uid && "room__reciever"
            }`}
            key={message.timestamps}
          >
            <span className="room__messageChatName">{message.name}</span>
            {message.message}
            <span className="room__messageTimestamp">
              {new Date(message.timestamps?.toDate()).toUTCString()}
            </span>
          </p>
        ))}
      </div>
      <div className="room__footer">
        <InsertEmoticon />
        <form onSubmit={sendMessage}>
          <input
            placeholder="Type a input"
            onChange={(e) => setInput(e.target.value)}
            value={input}
          />
          <Send onClick={sendMessage} />
        </form>
      </div>
    </div>
  ) : (
    <div>
      <h1>Choose a room</h1>
    </div>
  );
};

export default Room;
