import React from "react";
import Logo from "../Logo";
import { FaUser } from "react-icons/fa";
import { FaChalkboardTeacher } from "react-icons/fa";
import { MdSpaceDashboard } from "react-icons/md";
import Menu from "./Menu";
import MenuWrapper from "./MenuWrapper";
import { Link } from "react-router-dom";

function SideBar() {
  return (
    <div className=" w-3/4 h-screen md:w-80 bg-gray-100 px-5">
      <section className="sidebar flex flex-col gap-y-3">
        <Link to="">
          <Logo />
        </Link>
        <div className="w-full h-full flex">
          <MenuWrapper className={"flex flex-col gap-y-1"}>
            <Menu to="">
              <MdSpaceDashboard className="mr-3" /> Dashbord
            </Menu>
            <Menu to="/course">
              <MdSpaceDashboard className="mr-3" /> Course
            </Menu>
            <Menu to="/instuctors">
              <FaChalkboardTeacher className="mr-3" /> Instuctors
            </Menu>
            <Menu to="students">
              <FaUser className="mr-3" /> Students
            </Menu>
          </MenuWrapper>
        </div>
      </section>
    </div>
  );
}

export default SideBar;
