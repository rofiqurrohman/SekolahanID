import React, { useState } from "react";
import useDarkMode from "./../Const/useDarkMode";
import { NavLink } from "react-router-dom";
import { DarkModeSwitch } from "react-toggle-dark-mode";

function NavTop(props) {
  const savedTheme = window.localStorage.getItem("THEME_SEKOLAH");
  const [isDarkMode, setDarkMode] = useState(savedTheme === "dark");
  const [theme, setTheme] = useDarkMode();

  const toggleDarkMode = (e) => {
    setDarkMode(e);
    setTheme(isDarkMode ? "light" : "dark");
  };

  return (
    <nav
      className={`nav-top navbar navbar-expand-lg ${theme}-theme fixed-top py-3`}
    >
      <div className="container">
        <NavLink className="navbar-brand fw-bold" to="/">
          Sekolahan ID
        </NavLink>
        <DarkModeSwitch checked={isDarkMode} onChange={toggleDarkMode} />
      </div>
    </nav>
  );
}

export default NavTop;
