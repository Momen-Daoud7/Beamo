import React from "react";
import SidebarRow from "./sidebarRow/SidebarRow";
import {
  LocalHospital,
  EmojiFlags,
  People,
  Chat,
  Storefront,
  VideoLibrary,
} from "@material-ui/icons";
import "./Sidebar.css";
import { useSelector } from "react-redux";

const Sidebar = () => {
  const { user } = useSelector((state) => state.users);
  return (
    <div className="sidebar">
      <SidebarRow src={user.photoURL} title={user.displayName} />
      <SidebarRow Icon={LocalHospital} title="Covid-19 information center" />
      <SidebarRow Icon={EmojiFlags} title="Pages" />
      <SidebarRow Icon={People} title="Friends" />
      <SidebarRow Icon={Chat} title="Messagner" />
      <SidebarRow Icon={Storefront} title="Marketplace" />
      <SidebarRow Icon={VideoLibrary} title="Videos" />
    </div>
  );
};

export default Sidebar;
