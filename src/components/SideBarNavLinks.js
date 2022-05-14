import React from "react";

const SideBarNavLinks = (props) => {
  return (
    <a className="sidebar-link" href="#!">
      <img src={props.svg} alt={props.title}></img>
      <span className="font-medium">{props.title}</span>
    </a>
  );
};

export default SideBarNavLinks;
