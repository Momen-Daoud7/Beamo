import "./Chat.css";
import Room from "./room/Room";
import Topbar from "./room/topbar/Topbar";

const Chat = () => {
  return (
    <div className="chat">
      <Topbar />
      <Room />
    </div>
  );
};

export default Chat;
