import React from "react";
import { NavLink } from "react-router-dom";
import profilePic from "../assets/react.svg";

const Sidebar = () => {
  return (
    <nav className="w-1/5 bg-gray-800 text-white p-4 flex flex-col items-center justify-center">
      <img
        src={profilePic}
        alt="Profile"
        className="w-32 h-32 rounded-full border-4 border-white mb-6"
      />

      <ul className="flex flex-col items-center gap-y-2">
        <li>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "font-semibold underline underline-offset-2 block uppercase" : "block uppercase")}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            className={({ isActive }) => (isActive ? "font-semibold underline underline-offset-2 block uppercase" : "block uppercase")}
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/skills"
            className={({ isActive }) => (isActive ? "font-semibold underline underline-offset-2 block uppercase" : "block uppercase")}
          >
            Skills
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/interest"
            className={({ isActive }) => (isActive ? "font-semibold underline underline-offset-2 block uppercase" : "block uppercase")}
          >
            Interest
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/education"
            className={({ isActive }) => (isActive ? "font-semibold underline underline-offset-2 block uppercase" : "block uppercase")}
          >
            Education
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/experience"
            className={({ isActive }) => (isActive ? "font-semibold underline underline-offset-2 block uppercase" : "block uppercase")}
          >
            Experience
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/awards"
            className={({ isActive }) => (isActive ? "font-semibold underline underline-offset-2 block uppercase" : "block uppercase")}
          >
            Awards
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Sidebar;
