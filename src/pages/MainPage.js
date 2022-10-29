import Header from "../components/header/Header";
import Sidebar from "../components/sidebar/Sidebar";
import Feed from "../components/feed/Feed";

const MainPage = () => {
  return (
    <>
      <Header />
      <div className="app__body">
        <Sidebar />
        <Feed />
      </div>
    </>
  );
};

export default MainPage;
