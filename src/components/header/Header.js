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
import { Link, NavLink } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const { user } = useSelector((state) => state.users);
  return (
    <div className="header">
      <div className="header__left">
        <img
          src="data:image/png;base64,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"
          alt="facebook logo"
        />
        <div className="header__input">
          <Search />
          <input type="text" placeholder="Search Beamo" />
        </div>
      </div>
      <div className="header__center">
        <NavLink to="/" className="header__options">
          <Home />
        </NavLink>
        <NavLink to="/chat" className="header__options">
          <MessageSharp />
        </NavLink>
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
