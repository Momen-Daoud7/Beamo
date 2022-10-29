import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import db from "../../../../firebase/firebase";
import Option from "./option/Option";
import "./Topbar.css";

const Topbar = () => {
  const [rooms, setRooms] = useState([]);
  const { user } = useSelector((state) => state.users);
  useEffect(() => {
    const unsubscribe = db.collection("rooms").onSnapshot((snapshot) => {
      setRooms(snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() })));
    });

    return () => unsubscribe();
  }, []);
  return (
    <div className="topbar">
      <Option addNewRoom />
      {rooms.map((room) => (
        <Option key={room.id} id={room.id} name={room.data.name} />
      ))}
    </div>
  );
};

export default Topbar;
