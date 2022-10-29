import Header from "../components/header/Header";
import Chat from "../components/Chat/Chat";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useNavigate } from "react-router";

const ChatPage = () => {
  const { user } = useSelector((state) => state.users);
  const nav = useNavigate();
  useEffect(() => {
    if (!user) {
      nav("/login");
    }
  });
  return (
    <>
      <Header />
      <Chat />
    </>
  );
};

export default ChatPage;
