import React from "react";
import SideBarNavLinks from "./SideBarNavLinks";

const SideBarNav = () => {
  return (
    <div className="w-28 shadow-sm bg-white px-1 absolute border-2 rounded-md">
      <ul className="relative">
        <li className="relative">
          <a className="sidebar-link-active" href="#!">
            <img src="/assets/svgs/home.svg" alt="home"></img>
            <span className="font-medium text-[#133774]">Home</span>
          </a>
        </li>

        <li className="relative">
          <SideBarNavLinks title="Workspace" svg="/assets/svgs/workspace.svg" />
        </li>

        <li>
          <SideBarNavLinks title="MARPOL" svg="/assets/svgs/marpol.svg" />
        </li>

        <li>
          <SideBarNavLinks title="OH&S" svg="/assets/svgs/ohs.svg" />
        </li>

        <li>
          <SideBarNavLinks title="Insights" svg="/assets/svgs/pie.svg" />
        </li>

        <li>
          <SideBarNavLinks title="History" svg="/assets/svgs/history.svg" />
        </li>

        <li>
          <SideBarNavLinks title="Apps" svg="/assets/svgs/apps.svg" />
        </li>
        <li>
          <SideBarNavLinks title="Settings" svg="/assets/svgs/settings.svg" />
        </li>
      </ul>
    </div>
  );
};

export default SideBarNav;
