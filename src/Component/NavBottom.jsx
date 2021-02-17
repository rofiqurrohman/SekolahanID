import React from "react";
import { NavLink } from "react-router-dom";
import { BsFillHouseFill, BsFillInfoCircleFill } from "react-icons/bs";
import useDarkMode from "./../Const/useDarkMode";

function NavBottom(props) {
  const [theme] = useDarkMode();
  return (
    <nav
      className={`nav-bottom navbar navbar-expand-lg ${theme}-theme fixed-bottom py-0`}
    >
      <div className="container d-flex justify-content-center">
        <div className="navbar-nav flex-row">
          <NavLink
            exact
            className="nav-link d-flex flex-column align-items-center px-4"
            to="/"
          >
            <BsFillHouseFill />
            <span>Home</span>
          </NavLink>
          <NavLink
            className="nav-link d-flex flex-column align-items-center px-4"
            to="/about"
          >
            <BsFillInfoCircleFill />
            <span>About</span>
          </NavLink>
        </div>
      </div>
    </nav>
  );
}

export default NavBottom;
