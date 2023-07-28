import React from "react";
import "./SidebarOptions.css";

function SidebarOptions({ Icon, title, number, selected }) {
  return (
    <div
      className={`sidebar__options ${selected && "sidebarOptions--active"} `}
    >
      <Icon />
      <h3>{title}</h3>
      <p>{number}</p>
    </div>
  );
}

export default SidebarOptions;
