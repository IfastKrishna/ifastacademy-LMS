import React from "react";
import Logo from "../Logo";
import { FaUser } from "react-icons/fa";
import { FaChalkboardTeacher } from "react-icons/fa";
import { MdSpaceDashboard } from "react-icons/md";
import Menu from "./Menu";
import MenuWrapper from "./MenuWrapper";

function SideBar() {
  return (
    <div className=" w-3/4 h-screen md:w-80 bg-gray-200 px-5">
      <section className="sidebar flex flex-col gap-y-3">
        <div className="flex">
          <Logo />
        </div>
        <div className="w-full h-full flex">
          <MenuWrapper>
            <Menu>
              <MdSpaceDashboard className="mr-3" /> Dashbord
            </Menu>
            <Menu>
              <MdSpaceDashboard className="mr-3" /> Course
            </Menu>
            <Menu>
              <FaChalkboardTeacher className="mr-3" /> Instuctors
            </Menu>
            <Menu>
              <FaUser className="mr-3" /> Students
            </Menu>
          </MenuWrapper>
        </div>
      </section>
    </div>
  );
}

export default SideBar;
