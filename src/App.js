import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import "./App.css";
import Feed from "./components/feed/Feed";
import Header from "./components/header/Header";
import Login from "./components/login/Login";
import Sidebar from "./components/sidebar/Sidebar";

function App() {
  const { user } = useSelector((state) => state.users);
  console.log(user);
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/login" exact element={<Login />} />
          <Route
            path="/"
            exact
            element={
              <>
                <Header />
                <div className="app__body">
                  <Sidebar />
                  <Feed />
                </div>
              </>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
