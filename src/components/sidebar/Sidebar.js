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

const Sidebar = () => {
  return (
    <div>
      <SidebarRow src="n" title="Momen Dauod" />
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
