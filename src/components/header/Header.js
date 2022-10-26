import { Avatar, IconButton } from "@material-ui/core";
import {
  Add,
  ExpandMore,
  Flag,
  Forum,
  Home,
  NotificationsActive,
  Search,
  StorefrontOutlined,
  SubscriptionsOutlined,
  SupervisedUserCircle,
} from "@material-ui/icons";
import React from "react";
import { useSelector } from "react-redux";
import "./Header.css";

const Header = () => {
  const { user } = useSelector((state) => state.users);
  return (
    <div className="header">
      <div className="header__left">
        <img src="facebook.com" alt="facebook logo" />
        <div className="header__input">
          <Search />
          <input type="text" placeholder="Search Facebook" />
        </div>
      </div>
      <div className="header__center">
        <div className="header__options active">
          <Home fontSize="" />
        </div>
        <div className="header__options">
          <Flag fontSize="" />
        </div>
        <div className="header__options">
          <SubscriptionsOutlined fontSize="" />
        </div>
        <div className="header__options">
          <StorefrontOutlined fontSize="" />
        </div>
        <div className="header__options">
          <SupervisedUserCircle fontSize="" />
        </div>
      </div>
      <div className="header__right">
        <div className="header__info">
          <Avatar src={user.photoURL} />
          <h4>{user.displayName}</h4>
        </div>
        <IconButton>
          <Add />
        </IconButton>
        <IconButton>
          <Forum />
        </IconButton>
        <IconButton>
          <NotificationsActive />
        </IconButton>
        <IconButton>
          <ExpandMore />
        </IconButton>
      </div>
    </div>
  );
};

export default Header;
