import React from "react";
import Sidebar from "../components/Sidebar/Sidebar";
import { SidebarList } from "../components/Sidebar/SidebarList";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="flex lg:justify- md:justify-around justify-between pl-4 text-white bg-[#060b59]">
      <div className="font-bold lg:pl-0 text-2xl">
        <p>Foundation</p>
      </div>
      <div className="flex  gap-5 max-md:hidden">
        {SidebarList.map((item) => (
          <div className={window.location.pathname === item.path && " font-bold underline" }
            >
              <Link to={item.path}>
              <span className="group-hover:font-bold ">{item.label}{item.icon }</span>
              </Link>
            </div>
          ))}
      </div>
      {/*Header tab & mobile  */}
      <div className="lg:hidden md:hidden">
        <Sidebar />
      </div>
    </div>
  );
};

export default Header;
