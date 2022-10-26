import { Avatar, IconButton } from "@material-ui/core";
import {
  Add,
  ExpandMore,
  Flag,
  Forum,
  Home,
  Message,
  MessageRounded,
  MessageSharp,
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
          <Home />
        </div>
        <div className="header__options">
          <MessageSharp />
        </div>
        <div className="header__options">
          <SubscriptionsOutlined />
        </div>
        <div className="header__options">
          <StorefrontOutlined />
        </div>
        <div className="header__options">
          <SupervisedUserCircle />
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
