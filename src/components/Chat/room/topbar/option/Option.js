import { Avatar } from "@material-ui/core";
import { Add } from "@material-ui/icons";
import { Link } from "react-router-dom";
import db from "../../../../../firebase/firebase";

const Option = ({ id, name, addNewRoom }) => {
  // create chat
  const createChat = () => {
    const roomName = prompt("Enter a room name");
    if (roomName) {
      db.collection("rooms").add({ name: roomName });
    }
  };

  return !addNewRoom ? (
    <Link to={`/chat/rooms/${id}`}>
      <div className="topbar__option">
        <Avatar src={`https://avatars.dicebear.com/api/human/${id}.svg`} />
        <p>{name}</p>
      </div>
    </Link>
  ) : (
    <div className="topbar__option" onClick={createChat}>
      <Add className="topbar__optionAddRoom" />
      <p>Add</p>
    </div>
  );
};

export default Option;
