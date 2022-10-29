import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import "./App.css";
import Login from "./components/login/Login";
import MainPage from "./pages/MainPage";
import ChatPage from "./pages/ChatPage";

function App() {
  const { user } = useSelector((state) => state.users);
  console.log(user);
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<MainPage />} />
          <Route path="/login" exact element={<Login />} />
          <Route path="/chat" exact element={<ChatPage />} />
          <Route path="/chat/rooms/:roomId" exact element={<ChatPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
