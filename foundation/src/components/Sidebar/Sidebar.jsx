import classNames from "classnames";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button, Drawer } from "@mui/material";
import { SidebarList } from "../Sidebar/SidebarList";
import { ArrowBack, Menu } from "@mui/icons-material";

const Sidebar = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <>
      <Button onClick={handleOpen}>
        <Menu />
      </Button>
      <Drawer anchor="right"
      
        open={open}
        onClose={handleClose}
      
      >
        <ArrowBack onClick={handleClose} className="!h-8 cursor-pointer" />
        <div className="flex flex-col gap-2 mx-7  h-full  bg-white ">
          {SidebarList.map((item) => (
            <div
              className={classNames(
                "flex flex-col gap-8 h-10 items-center ",
                window.location.pathname === item.path && "font-bold underline"
              )}
            >
              <Link to={item.path}>
                <span className="group-hover:font-bold "onClick={handleClose}>{item.label}</span>
              </Link>
            </div>
          ))}
          
        </div>
      </Drawer>
    </>
  );
};

export default Sidebar;
