import { Avatar } from "@material-ui/core";
import React from "react";
import "./SidebarRow.css";

const SidebarRow = ({ src, Icon, title }) => {
  return (
    <div className="sidebarRow">
      {src && <Avatar />}
      {Icon && <Icon />}

      <h4>{title}</h4>
    </div>
  );
};

export default SidebarRow;
