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
import "./Header.css";

const Header = () => {
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
          <Home fontSize="large" />
        </div>
        <div className="header__options">
          <Flag fontSize="large" />
        </div>
        <div className="header__options">
          <SubscriptionsOutlined fontSize="large" />
        </div>
        <div className="header__options">
          <StorefrontOutlined fontSize="large" />
        </div>
        <div className="header__options">
          <SupervisedUserCircle fontSize="large" />
        </div>
      </div>
      <div className="header__right">
        <div className="header__info">
          <Avatar />
          <h4>Momen Dauod</h4>
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
